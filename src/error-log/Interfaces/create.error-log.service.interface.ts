import { CreateErrorLogDTO } from "../DTO/create-error-log.dto";
import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";

export interface ICreateErrorLogService {
    create(errorLog: CreateErrorLogDTO): Promise<ReadErrorLogDTO>
}