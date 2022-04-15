import { DocumentRepository } from '@modules/documents/repository/document.repository';
import { IslandsModule } from '@modules/islands/islands.module';
import { IslandRepository } from '@modules/islands/repository/island.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUserController } from './context/getUser/getUser.controller';
import { GetUserService } from './context/getUser/getUser.service';
import { GetUserDocumentsController } from './context/getUserDocuments/getUserDocuments.controller';
import { GetUserDocumentsService } from './context/getUserDocuments/getUserDocuments.service';
import { GetUserIslandController } from './context/getUserIsland/getUserIsland.controller';
import { GetUserIslandService } from './context/getUserIsland/getUserIsland.service';
import { UpdateUserDocumentsController } from './context/updateUserDocuments/updateUserDocuments.controller';
import { UpdateUserDocumentsService } from './context/updateUserDocuments/updateUserDocuments.service';
import { UserRepository } from './repository/user.repository';
import { UserDocumentsRepository } from './repository/userDocuments.repository';

@Module({
  imports: [
    IslandsModule,
    TypeOrmModule.forFeature([
      UserDocumentsRepository,
      UserRepository,
      DocumentRepository,
      IslandRepository,
    ]),
  ],
  controllers: [
    GetUserDocumentsController,
    UpdateUserDocumentsController,
    GetUserIslandController,
    GetUserController,
  ],
  providers: [
    GetUserDocumentsService,
    UpdateUserDocumentsService,
    GetUserIslandService,
    GetUserService,
  ],
})
export class UsersModule {}
