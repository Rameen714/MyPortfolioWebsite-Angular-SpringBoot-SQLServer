import { TestBed } from '@angular/core/testing';

import { LightDarkModeService } from './light-dark-mode.service';

describe('LightDarkModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LightDarkModeService = TestBed.get(LightDarkModeService);
    expect(service).toBeTruthy();
  });
});
