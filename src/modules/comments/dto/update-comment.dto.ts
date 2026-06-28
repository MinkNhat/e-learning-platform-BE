import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateCommentDto {
  @IsNotEmpty() @IsString() @MaxLength(3000)
  content: string;
}
