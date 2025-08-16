import { Test, TestingModule } from '@nestjs/testing';
import { LanggraphClientService } from './langgraph-client.service';

describe('LanggraphClientService', () => {
  let service: LanggraphClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanggraphClientService],
    }).compile();

    service = module.get<LanggraphClientService>(LanggraphClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
