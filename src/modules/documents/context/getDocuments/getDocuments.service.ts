import { DocumentRepository } from '@modules/documents/repository/document.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetDocumentsService {
  constructor(
    @InjectRepository(DocumentRepository) private docRepo: DocumentRepository,
  ) {}

  getDocuments() {
    const allDocuments = this.docRepo.find({ relations: ['island'] });
    return allDocuments;
  }
}
