import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { IGetErrorLogsApplication } from '../Interfaces/get.error-logs.application.interface';
import { TYPES } from '../Interfaces/types';

@Controller('error-log')
export class ErrorLogController {
    //constructor(private errorLogService: ErrorLogService) { } /* inject service into the controller */
    constructor(
        @Inject(TYPES.applications.IGetErrorLogsApplication) private getErrorLogsApp: IGetErrorLogsApplication
    ){}

    /*@Post()
    async addErrorLog(@Body() createErrorLogDTO: CreateErrorLogDTO) {
        const book = await this.errorLogService.addErrorLog(createErrorLogDTO);
        return book;
    }*/


    @Get()
    async getErrorLogs() {
        /*const books = await this.errorLogService.getErrorLogs();
        return books;*/

        const errorLogs = await this.getErrorLogsApp.getAll();
        return errorLogs;
    }

    /*
    @Get(':ErrorLogID')
    async getErrorLog(@Param('ErrorLogID') ErrorLogID) {
        const book = await this.errorLogService.getErrorLog(ErrorLogID);
        return book;
    }

    @Delete()
    async deleteErrorLog(@Query() query) {
        const books = await this.errorLogService.deleteErrorLog(query.errorLogID);
        return books;
    }*/
}
