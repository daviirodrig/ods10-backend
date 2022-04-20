import { IslandRepository } from '@modules/islands/repository/island.repository';
import { UserDocumentsRepository } from '@modules/users/repository/userDocuments.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToInstance } from 'class-transformer';

@Injectable()
export class GetUserIslandService {
  constructor(
    @InjectRepository(IslandRepository) private islandRepo: IslandRepository,
    @InjectRepository(UserDocumentsRepository)
    private userDocsRepo: UserDocumentsRepository,
  ) {}

  async getUserIsland(userId: string) {
    const islands = instanceToInstance(
      await this.islandRepo.find({
        relations: ['documents'],
        order: { id: 'ASC' },
      }),
    );

    const userDocuments = instanceToInstance(
      await this.userDocsRepo.find({
        where: { user: userId },
        relations: ['document', 'document.island'],
      }),
    );

    if (typeof userDocuments !== undefined && userDocuments.length === 0) {
      throw new NotFoundException(`User not found`);
    }

    return islands.map((island) => {
      const userDocs = userDocuments.filter(
        (userDoc) => userDoc.document.island.id === island.id,
      );
      return {
        id: island.id,
        name: island.name,
        description: island.description,
        documents: userDocs,
      };
    });
  }
}
