import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDocumentsRequestBodyDTO } from '@shared/dtos/updateUserDocumentsRequestBody.dto';
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
  async updateDocuments(
    @Param('id') userId: string,
    @Body() body: UpdateUserDocumentsRequestBodyDTO,
  ) {
    const updatedDoc = await this.updateUserDocumentsService.update(
      userId,
      body,
    );

    return instanceToInstance(updatedDoc);
  }
}
