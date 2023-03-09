import { Test, TestingModule } from '@nestjs/testing';
import { CreateErrorLogService, GetErrorLogsService } from './error-log.service';

describe('CreateErrorLogService', () => {
  let service: CreateErrorLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateErrorLogService],
    }).compile();

    service = module.get<CreateErrorLogService>(CreateErrorLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


describe('GetErrorLogsService', () => {
  let service: GetErrorLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetErrorLogsService],
    }).compile();

    service = module.get<GetErrorLogsService>(GetErrorLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});