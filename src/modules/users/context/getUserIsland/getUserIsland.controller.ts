import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserIslandResponseDTO } from '@shared/dtos/userIsland.dto';
import { instanceToInstance } from 'class-transformer';
import { GetUserIslandService } from './getUserIsland.service';

@ApiTags('Users')
@Controller('users')
export class GetUserIslandController {
  constructor(private getUserIslandService: GetUserIslandService) {}

  @Get(':id/islands')
  @ApiOkResponse({ type: [UserIslandResponseDTO] })
  getUserIsland(@Param('id') userId: string) {
    const userIsland = this.getUserIslandService.getUserIsland(userId);

    return instanceToInstance(userIsland);
  }
}
