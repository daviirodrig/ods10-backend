import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Document } from './document.entity';
import { Exclude } from 'class-transformer';

@Entity('users_documents')
export class UsersDocuments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Document, { cascade: true })
  @JoinTable()
  documents: Document[];

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
