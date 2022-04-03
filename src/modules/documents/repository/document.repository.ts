import { Document } from '@shared/entities/document.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Document)
export class DocumentRepository extends Repository<Document> {}
