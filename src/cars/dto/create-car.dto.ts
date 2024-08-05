

// Data Transfer Object (DTO)

import { IsString, MinLength } from "class-validator";

// es una clase y no una interface porque en una interface no se pueden hacer validaciones
export class CreateCarDto {

    // Con este decorador le decimos a class-validator que este campo es de tipo string
    @IsString(/* { message: 'El campo brand debe ser de tipo string' } */)
    readonly brand: string;

    // Aqui podemos ir poniendo las diferentes validaciones que queramos
    @IsString()
    @MinLength(3, { message: 'El modelo debe tener al menos 3 caracteres' })
    readonly model: string;
}