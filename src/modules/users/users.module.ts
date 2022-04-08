import { DocumentRepository } from '@modules/documents/repository/document.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUserDocumentsController } from './context/getUserDocuments/getUserDocuments.controller';
import { GetUserDocumentsService } from './context/getUserDocuments/getUserDocuments.service';
import { UpdateUserDocumentsController } from './context/updateUserDocuments/updateUserDocuments.controller';
import { UpdateUserDocumentsService } from './context/updateUserDocuments/updateUserDocuments.service';
import { UserRepository } from './repository/user.repository';
import { UserDocumentsRepository } from './repository/userDocuments.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserDocumentsRepository,
      UserRepository,
      DocumentRepository,
    ]),
  ],
  controllers: [GetUserDocumentsController, UpdateUserDocumentsController],
  providers: [GetUserDocumentsService, UpdateUserDocumentsService],
})
export class UsersModule {}
