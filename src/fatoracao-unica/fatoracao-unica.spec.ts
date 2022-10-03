import { fatoracaoUnica, fatoracao } from './fatoracao-unica';

describe('fatoracao', () => {
  it('should return an array with valid result to 100', () => {
    const response = fatoracaoUnica(175557);
    console.log('response', response);
    expect(response).toEqual(3);
  });
  it('should return an array with valid result to 100', () => {
    const response = fatoracao(100);
    console.log('response', response);
    expect(response).toEqual([
      {
        base: 2,
        expoente: 2
      },
      {
        base: 5,
        expoente: 2
      }
    ]);
  });
  it('should return an array with valid result to 175557', () => {
    const response = fatoracao(175557);
    console.log('response', response);
    expect(response).toEqual([
      {
        base: 3,
        expoente: 1
      },
      {
        base: 139,
        expoente: 1
      },
      {
        base: 421,
        expoente: 1
      }
    ]);
  });
  it('should return an array with valid result to 455621', () => {
    const response = fatoracao(455621);
    console.log('response', response);
    expect(response).toEqual([
      {
        base: 673,
        expoente: 1
      },
      {
        base: 677,
        expoente: 1
      }
    ]);
  });
  it('should return an array with valid result to 731021', () => {
    const response = fatoracao(731021);
    console.log('response', response);
    expect(response).toEqual([
      {
        base: 853,
        expoente: 1
      },
      {
        base: 857,
        expoente: 1
      }
    ]);
  });
});
