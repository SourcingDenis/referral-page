import { Handler } from '@netlify/functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import serverless from 'serverless-http';

let cachedHandler: Handler;

async function bootstrap() {
  if (!cachedHandler) {
    const app = await NestFactory.create(AppModule);
    await app.init();
    
    const expressApp = app.getHttpAdapter().getInstance();
    cachedHandler = serverless(expressApp);
  }
  return cachedHandler;
}

export const handler: Handler = async (event, context) => {
  const handler = await bootstrap();
  return handler(event, context);
};
