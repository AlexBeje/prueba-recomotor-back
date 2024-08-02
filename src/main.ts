import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
 
      'https://recomotor-back.alexbeje.dev',
      'https://recomotor-back.alexbeje.dev/',
      'https://recomotor-back.alexbeje.dev/cars',
      'https://recomotor-back.alexbeje.dev/cars/',
      'https://recomotor-back.alexbeje.dev/users',
      'https://recomotor-back.alexbeje.dev/users/',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
