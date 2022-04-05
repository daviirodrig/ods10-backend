import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Exclude } from 'class-transformer';
import { Document } from './document.entity';
import { Status } from '@shared/enums/status.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users_documents')
export class UsersDocuments {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @ManyToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;

  @ApiProperty()
  @ManyToOne(() => Document, { cascade: true })
  @JoinColumn()
  document: Document;

  @ApiProperty({ enum: Status })
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.missing,
  })
  status: Status;

  @CreateDateColumn({ name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @Exclude()
  deletedAt: Date;
}
