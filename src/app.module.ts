import { DocumentsModule } from '@modules/documents/documents.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), DocumentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
