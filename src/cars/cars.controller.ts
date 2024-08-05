import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// Aqui van los endpoints de nuestra aplicacion

// Escuchamos las peticiones que lleguen a /cars
@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {

    // Inyeccion de dependencias
    constructor(
        // readonly indica que no se puede reasignar el valor de la propiedad, en otras palabras no se puede modificar los valores por defecto
        private readonly carsService: CarsService
    ) {}

    // Este decorador indica que este metodo se ejecutara cuando se haga una peticion GET a /cars
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
    
    // Aqui estamos recibiendo un parametro de la URL como lo es el id
    @Get(':id')
    // getCarById( @Param('id', ParseIntPipe) id:number ) { // El decorador @Param('id') indica que queremos obtener el parametro id de la URL
        // ParseIntPipe es un pipe que convierte el valor de id a un numero entero que por defecto es de tipo string
    getCarById( @Param('id', ParseUUIDPipe) id:string ) { // ParseUUIDPipe es un pipe que convierte el valor de id a un UUID y lo valida

        console.log({id});
        return this.carsService.findOneById( id);
    }

    // Post es para crear un nuevo carro
    @Post()
    createCar( @Body() createCarDto: CreateCarDto ) { // El decorador @Body() indica que queremos obtener el cuerpo de la peticion
        
        // Usamos el metodo create del servicio para crear un nuevo carro
        return this.carsService.create( createCarDto );
    }

    // Patch es para actualizar un carro por id
    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id:string, 
        @Body() updateCarDto: UpdateCarDto 
    ) {
        return this.carsService.update( id, updateCarDto );
    }

    // Delete es para eliminar un carro por id
    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id:string ) { // El decorador @Param('id') indica que queremos obtener el parametro id de la URL
        return this.carsService.delete( id );
    }
}
