import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorLog } from '../Domain/error-log.entity';
import { Repository } from 'typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { CreateErrorLogDTO } from '../DTO/create-error-log.dto';
import { ReadErrorLogDTO } from "../DTO/read-error-log.dto";
import { ICreateErrorLogService } from '../Interfaces/create.error-log.service.interface';
import { IGetErrorLogsService } from '../Interfaces/get.error-logs.interface';

     @Injectable()
    export class CreateErrorLogService implements ICreateErrorLogService{
    constructor(
        @InjectRepository(ErrorLog) private errorLogRepository: Repository<ErrorLog>,
        @InjectMapper() private readonly classMapper: Mapper,
    ){}

    async create (errorLog: CreateErrorLogDTO): Promise<ReadErrorLogDTO>  {
        try {
            console.log("going to save: " + errorLog);
            const entity = this.classMapper.map(errorLog, CreateErrorLogDTO, ErrorLog);
            return this.classMapper.mapAsync(await this.errorLogRepository.save(entity), ErrorLog, ReadErrorLogDTO);
        }
        catch (ex) {
            console.log(`create error: ${ex.message}.`);
            throw new Error(`create error: ${ex.message}.`);
        }
        };
    }

    @Injectable()
    export class GetErrorLogsService implements IGetErrorLogsService {

    constructor(
        @InjectRepository(ErrorLog) private productRepository: Repository<ErrorLog> 
    ){}

    async getAll(): Promise<ReadErrorLogDTO[]> {
        try {
            return await this.productRepository.find()
        }
        catch (ex) {
            console.log(`error getting records: ${ex.message}.`);
            throw new Error(`error getting records: ${ex.message}.`);
        }
    }
}

