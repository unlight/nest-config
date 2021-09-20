# Deprecated in flavor of @nestjs-steroids/environment
# nest-config
Configuration module for Nest.js (wraps [convict](https://github.com/mozilla/node-convict) module).

INSTALL
---
```
npm i -S nest-config
```

USAGE
---
```ts
import { ConfigModule } from 'nest-config';
import { Module } from '@nestjs/common';

@Module({
    imports: [ConfigModule.forRoot(schema: convict.Schema<T> | string)],
})
export class AppModule {
}

```

```ts
export class UserController {
    
    constructor (
        private config: ConfigService
    ) { }

    hello() {
        const foo = this.config.get<string>('foo');
    }
}
```
