import { Global, Module, DynamicModule, Provider } from '@nestjs/common';
import { ConfigService } from './config.service';
import { Schema } from 'convict';
import convict = require('convict');

@Global()
@Module({})
export class ConfigModule {
    static forRoot<T = any>(schema: Schema<T> | string): DynamicModule {
        const config = convict(schema).validate();
        const providers: Provider[] = [
            { provide: ConfigService, useValue: new ConfigService<T>(config) },
        ];
        return {
            module: ConfigModule,
            providers: providers,
            exports: providers,
        };
    }
}
