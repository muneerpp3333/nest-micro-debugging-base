import { Test, TestingModule } from '@nestjs/testing';
import { SharedQueueService } from './shared-queue.service';

describe('SharedQueueService', () => {
  let service: SharedQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedQueueService],
    }).compile();

    service = module.get<SharedQueueService>(SharedQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
