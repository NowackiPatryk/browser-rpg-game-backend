import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(64)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(64)
  readonly confirmPassword: string;
}
