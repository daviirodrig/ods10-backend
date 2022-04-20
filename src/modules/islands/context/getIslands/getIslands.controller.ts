import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Island } from '@shared/entities/island.entity';
import { instanceToInstance } from 'class-transformer';
import { GetIslandsService } from './getIslands.service';

@ApiTags('Islands')
@Controller('islands')
export class GetIslandsController {
  constructor(private getIslandsService: GetIslandsService) {}

  @Get()
  @ApiOkResponse({ description: 'Success', type: Island, isArray: true })
  async getIslands() {
    const islands = await this.getIslandsService.getIslands();

    return instanceToInstance(islands);
  }
}
