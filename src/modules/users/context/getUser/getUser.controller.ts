import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@shared/entities/user.entity';
import { instanceToInstance } from 'class-transformer';
import { GetUserService } from './getUser.service';

@ApiTags('Users')
@Controller('users')
export class GetUserController {
  constructor(private getUserService: GetUserService) {}

  @Get(':id')
  @ApiOkResponse({ type: User })
  getUser(@Param('id') userId: string) {
    const user = this.getUserService.getUser(userId);

    return instanceToInstance(user);
  }
}
