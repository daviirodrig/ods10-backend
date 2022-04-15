import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetUserService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  getUser(userId: string) {
    return this.userRepo.findOne({
      where: { id: userId },
    });
  }
}
