import { IslandRepository } from '@modules/islands/repository/island.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetIslandsService {
  constructor(
    @InjectRepository(IslandRepository) private islandRepo: IslandRepository,
  ) {}

  async getIslands() {
    return this.islandRepo.find({
      relations: ['documents'],
      order: { id: 'ASC' },
    });
  }
}
