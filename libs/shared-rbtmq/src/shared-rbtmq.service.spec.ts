import { Test, TestingModule } from '@nestjs/testing';
import { SharedRbtmqService } from './shared-rbtmq.service';

describe('SharedRbtmqService', () => {
  let service: SharedRbtmqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedRbtmqService],
    }).compile();

    service = module.get<SharedRbtmqService>(SharedRbtmqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
