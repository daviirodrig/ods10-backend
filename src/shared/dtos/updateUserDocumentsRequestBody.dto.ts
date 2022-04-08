import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@shared/enums/status.enum';
import { IsEnum, IsString, IsUUID } from 'class-validator';

export class UpdateUserDocumentsRequestBodyDTO {
  @ApiProperty({
    type: String,
    format: 'uuid',
  })
  @IsUUID()
  @IsString()
  document: string;

  @ApiProperty({ enum: Status })
  @IsEnum(Status)
  status: Status;
}
