import { TestBed } from '@angular/core/testing';

import { EslintService } from './eslint.service';

describe('EslintService', () => {
  let service: EslintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EslintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
