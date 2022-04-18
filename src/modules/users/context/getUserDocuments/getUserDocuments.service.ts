import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDocumentsRepository } from '../../repository/userDocuments.repository';

@Injectable()
export class GetUserDocumentsService {
  constructor(
    @InjectRepository(UserDocumentsRepository)
    private userDocsRepo: UserDocumentsRepository,
  ) {}

  async getDocuments(userId: string) {
    const userDocs = await this.userDocsRepo.find({
      where: { user: userId },
      relations: ['document', 'document.island'],
    });

    if (typeof userDocs !== undefined && userDocs.length === 0) {
      throw new NotFoundException(`User not found`);
    }

    return userDocs;
  }
}
