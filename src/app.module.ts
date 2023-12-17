import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './providers/database/database.module';
import { SmsModule } from './providers/sms/sms.module';
import { RedisModule } from './providers/cache/redis/redis.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        DatabaseModule,
        SmsModule,
        RedisModule
    ],
    controllers: [AppController],
    providers: [AppService, Logger]
})
export class AppModule {}
