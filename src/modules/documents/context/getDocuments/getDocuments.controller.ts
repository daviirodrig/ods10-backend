import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Document } from '@shared/entities/document.entity';
import { instanceToInstance } from 'class-transformer';
import { GetDocumentsService } from './getDocuments.service';

@ApiTags('Documents')
@Controller('documents')
export class GetDocumentsController {
  constructor(private getDocumentsService: GetDocumentsService) {}

  @Get()
  @ApiOkResponse({ description: 'Success', type: Document, isArray: true })
  getDocuments() {
    const docs = this.getDocumentsService.getDocuments();
    return instanceToInstance(docs);
  }
}
