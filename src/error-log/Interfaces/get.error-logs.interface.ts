import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";

export interface IGetErrorLogsService {
    getAll(): Promise<ReadErrorLogDTO[]>
}