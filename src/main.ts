import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiDocumentationConfig = new DocumentBuilder()
    .setTitle('OpenFoodFacts API')
    .setDescription('An API to query the Open Food Facts database.')
    .setVersion('1.0')
    .build();

  const apiDocumentationDocument = SwaggerModule.createDocument(app, apiDocumentationConfig);
  SwaggerModule.setup('api', app, apiDocumentationDocument);

  await app.listen(3000);
}

bootstrap();
