import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserRequestBodyDTO } from '@shared/dtos/updateUserRequestBody.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
  ) {}

  async execute(userId: string, data: UpdateUserRequestBodyDTO) {
    const user = await this.userRepo.findOne(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepo.save({
      id: userId,
      ...data,
    });

    const updatedUser = await this.userRepo.findOne(userId);

    return updatedUser;
  }
}
