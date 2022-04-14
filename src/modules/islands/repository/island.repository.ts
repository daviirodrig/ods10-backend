import { Island } from '@shared/entities/island.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Island)
export class IslandRepository extends Repository<Island> {}
