import { calculaEuclidianoEstendido } from './euclidiano-estendido';

describe('euclidianoEstendido', () => {
  it('should return correct mdc, a and b', () => {
    const response = calculaEuclidianoEstendido(20, 10);
    expect(response).toEqual({
      mdc: 10,
      a: 1,
      b: -1
    });
  });
  it('should return correct mdc, a and b', () => {
    const response = calculaEuclidianoEstendido(1234, 54);

    expect(response).toEqual({
      mdc: 2,
      a: -7,
      b: 160
    });
  });
});
