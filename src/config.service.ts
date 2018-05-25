import { Injectable } from '@nestjs/common';
import * as convict from 'convict';

@Injectable()
export class ConfigService<T = any> {

    constructor(
        private readonly config: convict.Config<T>
    ) { }

    get<R = any>(key: string) {
        return this.config.get(key);
    }
}
