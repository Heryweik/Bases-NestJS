import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Este es el modulo principal de la aplicacion
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
