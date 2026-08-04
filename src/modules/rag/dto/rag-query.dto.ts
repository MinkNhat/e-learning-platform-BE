import { IsMongoId, IsOptional, IsString, MaxLength } from 'class-validator';

export class RagQueryDto {
  @IsString()
  @MaxLength(10_000)
  q: string;

  @IsOptional()
  @IsMongoId()
  conversationId?: string;

  @IsOptional()
  @IsMongoId()
  courseId?: string;

  @IsOptional()
  @IsMongoId()
  moduleId?: string;

  @IsOptional()
  @IsMongoId()
  lessonId?: string;
}
