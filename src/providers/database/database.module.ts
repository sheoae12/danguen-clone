import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'mysql',
                    host: configService.get<string>('db.host'),
                    port: configService.get<number>('db.port'),
                    database: configService.get<string>('db.name'),
                    username: configService.get<string>('db.username'),
                    password: configService.get<string>('db.password'),
                    synchronize: false,
                    logging: true,
                    entities: ['dist/entities/*.entity.js']
                };
            }
        })
    ]
})
export class DatabaseModule {}
