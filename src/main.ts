import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startMoralis } from './service/moralis';

async function bootstrap() {
  await startMoralis();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
