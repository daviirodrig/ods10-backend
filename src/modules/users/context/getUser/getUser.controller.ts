import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserIdParamDto } from '@shared/dtos/userIdParam.dto';
import { User } from '@shared/entities/user.entity';
import { instanceToInstance } from 'class-transformer';
import { GetUserService } from './getUser.service';

@ApiTags('Users')
@Controller('users')
export class GetUserController {
  constructor(private getUserService: GetUserService) {}

  // add api param swagger
  @Get(':id')
  @ApiOkResponse({ type: User })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  getUser(@Param() param: UserIdParamDto): Promise<User> {
    const user = this.getUserService.getUser(param.id);

    return instanceToInstance(user);
  }
}
