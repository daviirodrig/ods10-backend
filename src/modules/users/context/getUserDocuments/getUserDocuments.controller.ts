import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersDocuments } from '@shared/entities/usersDocuments.entity';
import { instanceToInstance } from 'class-transformer';
import { GetUserDocumentsService } from './getUserDocuments.service';

@ApiTags('Users')
@Controller('users')
export class GetDocumentsController {
  constructor(private getUserDocumentsService: GetUserDocumentsService) {}

  @Get(':id/documents')
  @ApiOkResponse({
    description: 'Success',
    isArray: true,
    type: UsersDocuments,
  })
  async getDocuments(@Param('id') userId: string) {
    const docs = await this.getUserDocumentsService.getDocuments(userId);

    //const parsed = instanceToInstance(docs).map((i) => {
    //  return { ...i.document, status: i.status };
    //});

    return instanceToInstance(docs);
  }
}
