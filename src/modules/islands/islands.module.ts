import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetIslandsController } from './context/getIslands/getIslands.controller';
import { GetIslandsService } from './context/getIslands/getIslands.service';
import { IslandRepository } from './repository/island.repository';

@Module({
  imports: [TypeOrmModule.forFeature([IslandRepository])],
  controllers: [GetIslandsController],
  providers: [GetIslandsService],
})
export class IslandsModule {}
