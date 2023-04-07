import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CurrencyService } from './currency/currency.service';
import { GraphqlService } from './graphql/graphql.service';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger:
      process.env.IS_DEV === 'false'
        ? ['log', 'error', 'warn']
        : ['log', 'error', 'warn', 'debug' /*, 'verbose' */],
  });

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  const config = new DocumentBuilder()
    .setTitle('Dexfund Backend')
    .setDescription('The dexfund API description')
    .setVersion('1.0')
    .addTag('dexfund')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
