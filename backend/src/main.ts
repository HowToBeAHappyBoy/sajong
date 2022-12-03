import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import { static as statc1 } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/public', statc1(join(__dirname, '../public')));

  const config = new DocumentBuilder()
    .setTitle('sajong')
    .setDescription('sajong API description')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(4000);
}
bootstrap();
