
// Toda esta parte tiene mas sentido al usar una BD o cuando el DTO requiere mas de un elemento

/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

// El partial type es un tipo de datos que nos permite hacer que todos los campos de un DTO sean opcionales y de esta forma no tener que reescribir los que estan en el Dto original
export class UpdateBrandDto extends PartialType(CreateBrandDto) {} */

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {

    @IsString()
    @MinLength(1)
    name: string;
}
