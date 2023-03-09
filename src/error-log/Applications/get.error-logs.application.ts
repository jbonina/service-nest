import { Inject, Injectable } from "@nestjs/common";
import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";
import { IGetErrorLogsApplication } from "../Interfaces/get.error-logs.application.interface";
import { TYPES } from "../Interfaces/types";
import { IGetErrorLogsService } from "../Interfaces/get.error-logs.interface";

@Injectable()
export class GetErrorLogsApplication implements IGetErrorLogsApplication {

    constructor(
        @Inject(TYPES.services.IGetErrorLogsService) private errorLogsService: IGetErrorLogsService
    ){}

    async getAll(): Promise<ReadErrorLogDTO[]> {
        return await this.errorLogsService.getAll()
    }
}

