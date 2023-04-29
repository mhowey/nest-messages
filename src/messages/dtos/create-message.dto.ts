import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString(null)
  content: string;
}
