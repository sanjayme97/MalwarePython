import { TestBed } from '@angular/core/testing';

import { ScanReportService } from './scan-report.service';

describe('ScanReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScanReportService = TestBed.get(ScanReportService);
    expect(service).toBeTruthy();
  });
});
