import { Inject, Injectable } from "@nestjs/common";
import { CreateErrorLogDTO } from "../DTO/create-error-log.dto";
import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";
import { ICreateErrorLogApplication } from "../Interfaces/create.error-log.application.interface";
import { ICreateErrorLogService } from "../Interfaces/create.error-log.service.interface";
import { TYPES } from "../Interfaces/types";

@Injectable()
export class CreateErrorLogApplication implements ICreateErrorLogApplication {
    constructor(
        @Inject(TYPES.services.ICreateErrorLogService) private errorLogService: ICreateErrorLogService
    ){}

    async create(errorLog: CreateErrorLogDTO): Promise<ReadErrorLogDTO> {
        return await this.errorLogService.create(errorLog)
    }
}