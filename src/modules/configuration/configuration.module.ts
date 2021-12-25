import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ConfigValidator } from "./config-validator";
import config from './configs';

new ConfigValidator(config).validate();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => config,
      ]
    })
  ]
})
export class ConfigurationModule {}