import { IsString, IsNumber, IsDate } from 'class-validator';

export class ErrorLogDomain {
       
    @IsString()
    errorMsg: string;

    @IsString()
    errorStackTrace: string;

    @IsString()
    IPAddress: string;

    @IsNumber()
    Port: number;

    @IsString()
    ExtIPAddress: string;

    @IsNumber()
    ExtPort: number;

    @IsString()
    ServernameFQDN: string;

    @IsString()
    ApplicationName: string;

    @IsString()
    ApplicationVersion: string;

    @IsNumber()
    ApplicationErrorLevel: number;

}