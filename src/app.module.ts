import { Module } from '@nestjs/common';
import { ORMConfig } from './typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorLogModule } from './error-log/error-log.module';

import { ErrorLog } from './error-log/Domain/error-log.entity';
import { TYPES } from './error-log/Interfaces/types';
import { CreateErrorLogApplication } from './error-log/Applications/create.error-log.application';
import { CreateErrorLogService } from './error-log/Services/error-log.service';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';


const createErrorLogApp = { provide: TYPES.applications.ICreateErrorLogApplication, useClass: CreateErrorLogApplication  }
const createErrorLogService = { provide: TYPES.services.ICreateErrorLogService, useClass: CreateErrorLogService } 


@Module({
  imports: [
    TypeOrmModule.forFeature([ErrorLog]),
    ErrorLogModule,
    TypeOrmModule.forRoot(ORMConfig),
    AutomapperModule.forRoot({strategyInitializer: classes()})],
  controllers: [AppController],
  providers: [AppService,
    createErrorLogApp,
    createErrorLogService]
})
export class AppModule {}
