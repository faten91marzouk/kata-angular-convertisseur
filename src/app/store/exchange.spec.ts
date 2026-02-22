import { TestBed } from '@angular/core/testing';
import { Exchange } from './exchange';

describe('Exchange', () => {
  let service: Exchange;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exchange);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
   it('should initialize rate to 1.1', () => {
    expect(service.rate()).toBe(1.1);
  });

  it('should convert EUR to USD correctly', () => {
  service.amount.set(10);
  service.currency.set('EUR');
});

it('should add a conversion to history', () => {
  service.amount.set(10);
  service.currency.set('EUR');
  expect(service.history().length).toBe(1);

  const entry = service.history()[0];

  expect(entry.inputValue).toBe(10);
  expect(entry.inputCurrency).toBe('EUR');
  expect(entry.outputValue).toBe(11); // 10 * 1.1
  expect(entry.outputCurrency).toBe('USD');
});
});
