import { euclidianoEstendido } from './euclidiano-estendido';

describe('euclidianoEstendido', () => {
  it('should return correct mdc, a and b', () => {
    const response = euclidianoEstendido(20, 10);
    expect(response).toEqual({
      mdc: 10,
      a: 1,
      b: -1
    });
  });
  it('should return correct mdc, a and b', () => {
    const response = euclidianoEstendido(1234, 54);
    expect(response).toEqual({
      mdc: 10,
      a: 1,
      b: -2
    });
  });
});
