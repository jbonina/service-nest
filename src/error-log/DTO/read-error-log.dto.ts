
import { AutoMap } from "@automapper/classes";


export class ReadErrorLogDTO {

    @AutoMap()
    id: BigInteger;
    
    @AutoMap()
    errorMsg: string;

    @AutoMap()
    errorStackTrace: string;

    @AutoMap()
    IPAddress: string;

    @AutoMap()
    Port: number;

    @AutoMap()
    ExtIPAddress: string;

    @AutoMap()
    ExtPort: number;

    @AutoMap()
    ServernameFQDN: string;

    @AutoMap()
    ApplicationName: string;

    @AutoMap()
    ApplicationVersion: string;

    @AutoMap()
    ApplicationErrorLevel: number;

}