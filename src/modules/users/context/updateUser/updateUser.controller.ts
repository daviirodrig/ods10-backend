import { Body, Controller, Param, Patch } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUserRequestBodyDTO } from '@shared/dtos/updateUserRequestBody.dto';
import { UserIdParamDto } from '@shared/dtos/userIdParam.dto';
import { User } from '@shared/entities/user.entity';
import { instanceToInstance } from 'class-transformer';
import { UpdateUserService } from './updateUser.service';

@ApiTags('Users')
@Controller('users')
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Patch(':id')
  @ApiOkResponse({
    description: 'User updated',
    type: User,
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async update(
    @Param() params: UserIdParamDto,
    @Body() data: UpdateUserRequestBodyDTO,
  ) {
    const updated = this.updateUserService.execute(params.id, data);

    return instanceToInstance(updated);
  }
}
