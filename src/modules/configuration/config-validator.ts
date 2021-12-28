import { IConfig } from './interfaces/config.interface';
import { ValidateNested, validateSync, ValidationError } from 'class-validator';
import { IApi } from './interfaces/api.interface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ISession } from './interfaces/session.interface';

export class ConfigValidator {
  private readonly validatedConfig: IConfig;

  constructor(config: IConfig) {
    this.validatedConfig = new ValidatedConfig(config);
  }

  validate(): void {
    const result: ValidationError[] = validateSync(this.validatedConfig);

    if (result.length) {
      const { value, property, constraints } = result[0];

      throw new Error(this.constructErrorMessage(value, property, constraints));
    }
  }

  constructErrorMessage(
    property: string,
    value: string,
    constraints: any,
  ): string {
    let message = `Property ${property} = ${value} does not pass the validation. Message: `;

    Object.keys(constraints).map((key) => {
      message += `${key} - ${constraints[key]}`;
    });

    return message;
  }
}

class ValidatedConfig {
  @ValidateNested()
  readonly api: IApi;

  @ValidateNested()
  readonly database: TypeOrmModuleOptions;

  @ValidateNested()
  readonly session: ISession;

  constructor(config: IConfig) {
    this.api = config.api;
    this.database = config.database;
    this.session = config.session;
  }
}
