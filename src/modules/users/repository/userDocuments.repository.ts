import { UsersDocuments } from '@shared/entities/usersDocuments.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(UsersDocuments)
export class UserDocumentsRepository extends Repository<UsersDocuments> {}
