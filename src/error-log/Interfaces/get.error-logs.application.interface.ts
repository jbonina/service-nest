import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";

export interface IGetErrorLogsApplication {
    getAll(): Promise<ReadErrorLogDTO[]>
}