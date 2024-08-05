import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

// Este es el modulo principal de la aplicacion
@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
