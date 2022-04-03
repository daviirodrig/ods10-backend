import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetDocumentsService } from './getDocuments.service';

@ApiTags('Documents')
@Controller('documents')
export class GetDocumentsController {
  constructor(private getDocumentsService: GetDocumentsService) {}

  @Get()
  getDocuments() {
    return this.getDocumentsService.getDocuments();
  }
}
