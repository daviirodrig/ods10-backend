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

@Entity('users_documents')
export class UsersDocuments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Document, { cascade: true })
  @JoinColumn()
  document: Document;

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
