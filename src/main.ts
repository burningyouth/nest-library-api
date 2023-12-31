import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppResponseInterceptor } from './app.response.interceptor';
import { HttpExceptionFilter } from './modules/validation/filters/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new AppResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
