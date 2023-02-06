import { TestBed } from '@angular/core/testing';

import { CampaignWebSocketService } from './campaign-web-socket.service';

describe('CampaignWebSocketService', () => {
  let service: CampaignWebSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignWebSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
