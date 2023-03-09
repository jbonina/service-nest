import { IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from "@automapper/classes";

@Entity({ name: 'ErrorLog' })
export class ErrorLog {
    
    @AutoMap()
    @PrimaryGeneratedColumn('identity')
    id: BigInteger;

    @AutoMap()
    @Column({ length: 256 })
    errorMsg: string;

    @AutoMap()
    @Column({ length: 2048 })
    @IsOptional()
    errorStackTrace: string;

    // IPAddress, Port and ApplicationName should be enough for identifying an instance

    @AutoMap()
    @Column({ length: 32 })
    IPAddress: string;

    @AutoMap()
    @Column()
    Port: number;

    @AutoMap()
    @Column({ length: 32 })
    @IsOptional()
    ExtIPAddress: string;

    @AutoMap()
    @Column()
    @IsOptional()
    ExtPort: number;

    @AutoMap()
    @Column({ length: 128 })
    @IsOptional()
    ServernameFQDN: string;

    @AutoMap()
    @Column({ length: 128 })
    ApplicationName: string;

    @AutoMap()
    @Column({ length: 64 })
    ApplicationVersion: string;

    @AutoMap()
    @Column()
    ApplicationErrorLevel: number;

}