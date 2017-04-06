/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UnshiftService } from './unshift.service';

describe('UnshiftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnshiftService]
    });
  });

  it('should ...', inject([UnshiftService], (service: UnshiftService) => {
    expect(service).toBeTruthy();
  }));
});
