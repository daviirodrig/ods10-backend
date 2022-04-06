import { DocumentsModule } from '@modules/documents/documents.module';
import { UsersModule } from '@modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), DocumentsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
