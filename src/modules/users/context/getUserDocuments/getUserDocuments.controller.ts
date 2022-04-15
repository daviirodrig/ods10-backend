import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserIdParamDto } from '@shared/dtos/userIdParam.dto';
import { UsersDocuments } from '@shared/entities/usersDocuments.entity';
import { instanceToInstance } from 'class-transformer';
import { GetUserDocumentsService } from './getUserDocuments.service';

@ApiTags('Users')
@Controller('users')
export class GetUserDocumentsController {
  constructor(private getUserDocumentsService: GetUserDocumentsService) {}

  @Get(':id/documents')
  @ApiOkResponse({
    description: 'Success',
    isArray: true,
    type: UsersDocuments,
  })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getDocuments(@Param() params: UserIdParamDto) {
    const docs = await this.getUserDocumentsService.getDocuments(params.id);

    return instanceToInstance(docs);
  }
}
