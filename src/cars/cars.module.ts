import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService], 
  exports: [CarsService] // Exportamos el servicio para que pueda ser utilizado en otros modulos
})
export class CarsModule {}
