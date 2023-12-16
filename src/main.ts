import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const port = configService.get<number>('app.port', 3000);

    const logger = app.get(Logger);

    await app.listen(port);
    logger.log(`app started at port ${port}`, 'NestApplication');
}
bootstrap();
