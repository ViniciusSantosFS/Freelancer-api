import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

export class CreateHirerDto {
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  name: string
}

export class UpdateHirerDto {
  @IsNotEmpty()
  @IsNumber()
  id: number

  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  name: string
}
