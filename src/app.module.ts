import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

// Este es el modulo principal de la aplicacion
@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
