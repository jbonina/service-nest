import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorLogController } from './Controllers/error-log.controller';
import { CreateErrorLogService, GetErrorLogsService } from './Services/error-log.service';

import { ErrorLog } from './Domain/error-log.entity';
import { TYPES } from './Interfaces/types';
import { CreateErrorLogApplication } from './Applications/create.error-log.application';
import { ErrorLogMapperProfile } from './DTO/error-log.dto.mapping';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { GetErrorLogsApplication } from 'src/error-log/Applications/get.error-logs.application';

const createErrorLogApp = { provide: TYPES.applications.ICreateErrorLogApplication, useClass: CreateErrorLogApplication  }
const createErrorLogService = { provide: TYPES.services.ICreateErrorLogService, useClass: CreateErrorLogService } 
const getErrorLogsApp = { provide: TYPES.applications.IGetErrorLogsApplication, useClass: GetErrorLogsApplication  }
const getErrorLogsService = { provide: TYPES.services.IGetErrorLogsService, useClass: GetErrorLogsService } 

@Module({
  imports: [TypeOrmModule.forFeature([ErrorLog]), AutomapperModule.forRoot({strategyInitializer: classes()})],
  controllers: [ErrorLogController],
  providers: [
    createErrorLogApp,
    createErrorLogService,
    getErrorLogsApp,
    getErrorLogsService,
    ErrorLogMapperProfile]
})
export class ErrorLogModule {}
