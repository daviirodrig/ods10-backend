import { DocumentRepository } from '@modules/documents/repository/document.repository';
import { UserRepository } from '@modules/users/repository/user.repository';
import { UserDocumentsRepository } from '@modules/users/repository/userDocuments.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDocumentsRequestBodyDTO } from '@shared/dtos/updateUserDocumentsRequestBody.dto';

@Injectable()
export class UpdateUserDocumentsService {
  constructor(
    @InjectRepository(UserDocumentsRepository)
    private userDocRepo: UserDocumentsRepository,
    @InjectRepository(UserRepository) private userRepo: UserRepository,
    @InjectRepository(DocumentRepository)
    private documentRepo: DocumentRepository,
  ) {}
  async update(userId: string, body: UpdateUserDocumentsRequestBodyDTO) {
    const user = await this.userRepo.findOne(userId);
    const savedDoc = await this.documentRepo.findOne(body.document, {
      relations: ['island'],
    });
    const userDoc = await this.userDocRepo.findOne({
      where: { user, document: savedDoc },
    });

    if (!user || !savedDoc) {
      throw new NotFoundException('User or document not found');
    }

    await this.userDocRepo.save({
      id: userDoc.id,
      user: user,
      document: savedDoc,
      status: body.status,
    });

    const updated = await this.userDocRepo.findOne({
      where: { user: userId, document: body.document },
      relations: ['document', 'document.island'],
    });

    return updated;
  }
}
