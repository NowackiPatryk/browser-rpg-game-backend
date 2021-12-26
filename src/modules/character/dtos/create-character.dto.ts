import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  nick: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
