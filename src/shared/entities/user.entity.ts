import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @Column({ name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  @Column({ name: 'deleted_at' })
  @Exclude()
  deletedAt: Date;
}
