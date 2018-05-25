import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';
import { Test, TestingModule } from '@nestjs/testing';
import assert = require('assert');

let testingModule: TestingModule;
let configService: ConfigService;

beforeEach(async () => {
    testingModule = await Test.createTestingModule({
        imports: [ConfigModule.forRoot({
            a: { default: 'A' }
        })],
    }).compile();
});

it('smoke', () => {
    assert(ConfigService);
    configService = testingModule.get(ConfigService);
    assert(configService instanceof ConfigService);
});

it('should get value key a', () => {
    const result = configService.get<string>('a');
    assert(result === 'A');
});

it('should fail if trying to get unknown key', () => {
    assert.throws(() => {
        configService.get<string>('foo');
    }, `cannot find configuration param 'foo'`);
});
