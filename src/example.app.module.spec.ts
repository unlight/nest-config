import { ConfigModule } from './config.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [ConfigModule.forRoot({})],
})
export class AppModule {
}
