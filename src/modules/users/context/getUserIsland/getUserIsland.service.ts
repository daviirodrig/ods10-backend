import { IslandRepository } from '@modules/islands/repository/island.repository';
import { UserDocumentsRepository } from '@modules/users/repository/userDocuments.repository';
import { Injectable } from '@nestjs/common';
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
      await this.islandRepo.find({ relations: ['documents'] }),
    );

    const userDocuments = instanceToInstance(
      await this.userDocsRepo.find({
        where: { user: userId },
        relations: ['document', 'document.island'],
      }),
    );

    return islands.map((island) => {
      const userDocument = userDocuments.find(
        (userDoc) => userDoc.document.island.id === island.id,
      );
      return {
        name: island.name,
        description: island.description,
        userDocument,
      };
    });
  }
}
