import { ApiProperty } from '@nestjs/swagger';
import { UsersDocuments } from '@shared/entities/usersDocuments.entity';

export class UserIslandResponseDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: [UsersDocuments] })
  documents: UsersDocuments[];
}
