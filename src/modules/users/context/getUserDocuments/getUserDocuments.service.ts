import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDocumentsRepository } from '../../repository/userDocuments.repository';

@Injectable()
export class GetUserDocumentsService {
  constructor(
    @InjectRepository(UserDocumentsRepository)
    private userDocsRepo: UserDocumentsRepository,
  ) {}

  getDocuments(userId: string) {
    return this.userDocsRepo.find({
      where: { user: userId },
      relations: ['document', 'document.island'],
    });
  }
}
