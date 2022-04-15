import { Body, Controller, Param, Put } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUserDocumentsRequestBodyDTO } from '@shared/dtos/updateUserDocumentsRequestBody.dto';
import { UserIdParamDto } from '@shared/dtos/userIdParam.dto';
import { UsersDocuments } from '@shared/entities/usersDocuments.entity';
import { instanceToInstance } from 'class-transformer';
import { UpdateUserDocumentsService } from './updateUserDocuments.service';

@ApiTags('Users')
@Controller('users')
export class UpdateUserDocumentsController {
  constructor(private updateUserDocumentsService: UpdateUserDocumentsService) {}

  @Put(':id/documents')
  @ApiOkResponse({ description: 'Success', type: UsersDocuments })
  @ApiNotFoundResponse({ description: 'User or document not found' })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async updateDocuments(
    @Param() params: UserIdParamDto,
    @Body() body: UpdateUserDocumentsRequestBodyDTO,
  ) {
    const updatedDoc = await this.updateUserDocumentsService.update(
      params.id,
      body,
    );

    return instanceToInstance(updatedDoc);
  }
}
