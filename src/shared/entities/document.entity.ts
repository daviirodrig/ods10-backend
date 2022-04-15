import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
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
import { Island } from './island.entity';

@Entity('documents')
export class Document {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ type: 'text' })
  shortDescription: string;

  @ApiProperty()
  @Column({ type: 'text' })
  fullDescription: string;

  @ApiProperty()
  @Column({ default: 0 })
  price: number;

  @ApiProperty()
  @Column({ nullable: true })
  link: string;

  @ApiProperty()
  @Column({ nullable: true })
  location: string;

  @ApiProperty()
  @Column({ nullable: true })
  duration: string;

  @ManyToOne(() => Island, (island) => island.documents)
  @JoinColumn()
  island: Island;

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
