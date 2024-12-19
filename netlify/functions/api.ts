import { Handler } from '@netlify/functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import serverless from 'serverless-http';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedHandler: Handler;
const server = express();

async function bootstrap() {
  if (!cachedHandler) {
    const expressAdapter = new ExpressAdapter(server);
    const app = await NestFactory.create(AppModule, expressAdapter);
    
    app.enableCors();
    app.setGlobalPrefix('/.netlify/functions/api');
    
    await app.init();
    cachedHandler = serverless(server);
  }
  return cachedHandler;
}

export const handler: Handler = async (event, context) => {
  const handler = await bootstrap();
  return handler(event, context);
};
