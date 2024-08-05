import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

// Todos los servicios son providers, no todos los providers son servicios

// Aqui van las operaciones que se pueden hacer con los carros

// Los servicios son clases que tienen la logica de negocio de nuestra aplicacion
@Injectable()
export class CarsService {

    private cars: Car[] = [
        /* {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cheerokee',
        } */
    ];

    // Creamos este metodo ya que cars es privado y no se puede leer desde afuera de la clase, por lo tanto necesitamos un metodo que nos permita leerlo
    findAll() {
        return this.cars;
    }

    // Metodo para obtener un carro por su id
    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);

        // Exception filter, NotFoundException es un error que se puede capturar en un filtro de excepciones por parte de nestjs
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

        return car
    }

    // Metodo para crear un carro
    create( createCarDto: CreateCarDto ) {

        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push( newCar );

        return newCar;
    }

    update( id: string, updateCarDto: UpdateCarDto ) {
        
        let carDB = this.findOneById(id) // Buscamos el carro por id, si no lo encuentra lanzara un error

        // Hacemos que no se pueda modificar el id
        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException('You cannot update the id of the car')

        }

        this.cars = this.cars.map( car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }

                return carDB
            }
            return car
        })

        return carDB; // Carro actualizado
    }

    delete( id: string ) {
        const car = this.findOneById(id);

        this.cars = this.cars.filter( car => car.id !== id );

        // No se retorna nada ya que el carro fue eliminado
        // return this.cars;
    }

    // Metodo para cargar informacion
    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }

}
