import { IsString, IsUUID } from 'class-validator';

export class UserIdParamDto {
  @IsUUID()
  @IsString()
  id: string;
}
