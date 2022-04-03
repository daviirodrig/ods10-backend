import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetDocumentsController } from './context/getDocuments/getDocuments.controller';
import { GetDocumentsService } from './context/getDocuments/getDocuments.service';
import { DocumentRepository } from './repository/document.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentRepository])],
  controllers: [GetDocumentsController],
  providers: [GetDocumentsService],
})
export class DocumentsModule {}
