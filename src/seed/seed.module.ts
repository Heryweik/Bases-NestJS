import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandsModule] // Importamos el modulo de cars para poder utilizar el servicio de cars
})
export class SeedModule {}
