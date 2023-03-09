import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import "reflect-metadata"

async function bootstrap() {

  // Hybrid application
  const app = await NestFactory.create(AppModule);

  // microservice listening on Rabbit-MQ queue
  const microserviceTcp = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://192.168.1.240:5672'],
      queue: 'error_logs_queue',
      queueOptions: {
        durable: false
      },
    },
  });  
  await app.startAllMicroservices();

  // enable cors for frontend calls
  app.enableCors();
  // open the mvc port
  await app.listen(3000);
}
bootstrap();
