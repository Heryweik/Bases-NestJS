import { Injectable, NotFoundException } from '@nestjs/common';

// Todos los servicios son providers, no todos los providers son servicios

// Aqui van las operaciones que se pueden hacer con los carros

// Los servicios son clases que tienen la logica de negocio de nuestra aplicacion
@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cheerokee',
        }
    ];

    // Creamos este metodo ya que cars es privado y no se puede leer desde afuera de la clase, por lo tanto necesitamos un metodo que nos permita leerlo
    findAll() {
        return this.cars;
    }

    // Metodo para obtener un carro por su id
    findOneById(id: number) {

        const car = this.cars.find(car => car.id === id);

        // Exception filter, NotFoundException es un error que se puede capturar en un filtro de excepciones por parte de nestjs
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

        return car
    }

}
