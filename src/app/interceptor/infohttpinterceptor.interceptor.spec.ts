import { TestBed } from '@angular/core/testing';

import { InfohttpinterceptorInterceptor } from './infohttpinterceptor.interceptor';

describe('InfohttpinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InfohttpinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InfohttpinterceptorInterceptor = TestBed.inject(InfohttpinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
