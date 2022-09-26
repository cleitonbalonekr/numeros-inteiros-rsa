import { describe, expect, it } from 'vitest';
import { mdc } from './mdc';
describe('MDC', () => {
  it('Should return a mdc with equal params', () => {
    const response = mdc(10, 10);
    expect(response).toBe(10);
  });
  it('Should return a mdc with different params', () => {
    const response = mdc(1234, 54);
    expect(response).toBe(2);
  });
  it('Should return a mdc with inverted params', () => {
    const response = mdc(54, 1234);
    expect(response).toBe(2);
  });
});
