import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetDocumentsController } from './context/getUserDocuments/getUserDocuments.controller';
import { GetUserDocumentsService } from './context/getUserDocuments/getUserDocuments.service';
import { UserRepository } from './repository/user.repository';
import { UserDocumentsRepository } from './repository/userDocuments.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDocumentsRepository, UserRepository]),
  ],
  controllers: [GetDocumentsController],
  providers: [GetUserDocumentsService],
})
export class UsersModule {}
