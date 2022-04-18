import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetUserService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  async getUser(userId: string) {
    const user = await this.userRepo.findOne(userId);

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }
}
