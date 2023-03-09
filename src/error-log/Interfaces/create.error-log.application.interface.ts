import { ErrorLogDomain } from "../Domain/error-log.domain";
import { CreateErrorLogDTO } from "../DTO/create-error-log.dto";
import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";

export interface ICreateErrorLogApplication {
    create(errorLog: CreateErrorLogDTO): Promise<ReadErrorLogDTO>
}