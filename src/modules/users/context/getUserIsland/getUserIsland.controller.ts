import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserIdParamDto } from '@shared/dtos/userIdParam.dto';
import { UserIslandResponseDTO } from '@shared/dtos/userIsland.dto';
import { instanceToInstance } from 'class-transformer';
import { GetUserIslandService } from './getUserIsland.service';

@ApiTags('Users')
@Controller('users')
export class GetUserIslandController {
  constructor(private getUserIslandService: GetUserIslandService) {}

  @Get(':id/islands')
  @ApiOkResponse({ type: [UserIslandResponseDTO] })
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  getUserIsland(@Param() params: UserIdParamDto) {
    const userIsland = this.getUserIslandService.getUserIsland(params.id);

    return instanceToInstance(userIsland);
  }
}
