import { Body, Controller, Get, HttpStatus, Inject, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices/decorators';
import { ErrorLogDomain } from './error-log/Domain/error-log.domain';
import { AppService } from './app.service';
import { TYPES } from './error-log/Interfaces/types';
import { ICreateErrorLogApplication } from './error-log/Interfaces/create.error-log.application.interface';
import {CreateErrorLogDTO}  from './error-log/DTO/create-error-log.dto';

@Controller()
export class AppController {
  constructor(
    @Inject(TYPES.applications.ICreateErrorLogApplication) private createErrorLogApp: ICreateErrorLogApplication ){}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @MessagePattern({cmd: 'greeting'})
  getGreetingMessage(name: string): string {
    return `Hello ${name}`;
  }

  @MessagePattern({cmd: 'greeting-async'})
  async getGreetingMessageAysnc(name: string): Promise<string> {
    return `Hello ${name} Async`;
  }

  @EventPattern('error-log-added')
  async handleErrorLogAddedEvent(data: CreateErrorLogDTO) {
    console.log("Received: "+ JSON.stringify(data));

    try {
        const errorLog = await this.createErrorLogApp.create(data);
    } catch (err) {
      console.log(`handler error: ${err.message}.`);
    }
  }
}
