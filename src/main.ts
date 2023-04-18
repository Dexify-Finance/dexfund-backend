import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as expressBasicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger:
      process.env.IS_DEV === 'false'
        ? ['log', 'error', 'warn']
        : ['log', 'error', 'warn', 'debug' /*, 'verbose' */],
  });

  const users = {
    [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
  };

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  
  app.use(
    '/docs',
    expressBasicAuth({
      challenge: true,
      users,
    }),
  );

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  const config = new DocumentBuilder()
    .setTitle('Dexfund Backend')
    .setDescription('The dexfund API description')
    .setVersion('1.0')
    .addTag('dexfund')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
