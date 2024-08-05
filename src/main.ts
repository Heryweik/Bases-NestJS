import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Mandamos el modulo principal de la aplicacion

  // Podemos usar el pipe de validacion globalmente
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true, // Elimina los campos que no esten definidos en el DTO
    forbidNonWhitelisted: true, // No permite que se envien campos que no esten definidos en el DTO
    // transform: true, // Convierte los valores a los tipos que se le indican en el DTO
  }) ); // Usamos el pipe de validacion globalmente

  await app.listen(3000);
}
bootstrap();
