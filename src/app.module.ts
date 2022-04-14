import { DocumentsModule } from '@modules/documents/documents.module';
import { IslandsModule } from '@modules/islands/islands.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    DocumentsModule,
    UsersModule,
    IslandsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
