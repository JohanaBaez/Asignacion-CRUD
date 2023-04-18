import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateComputerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}