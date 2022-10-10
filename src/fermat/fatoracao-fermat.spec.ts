import { fermat } from './fatoracao-fermat';
// a) 175557 b)455621 c)731021

describe('FatoracaoFermat', () => {
  it('should return two factors', () => {
    const response = fermat(175557);
    console.log('response', response);
    expect(response).toEqual({
      a: 417,
      b: 421
    });
  });
  it('should return two factors', () => {
    const response = fermat(455621);
    console.log('response', response);
    expect(response).toEqual({
      a: 673,
      b: 677
    });
  });
  it('should return two factors', () => {
    const response = fermat(731021);
    console.log('response', response);
    expect(response).toEqual({
      a: 853,
      b: 857
    });
  });
  it('should return two factors', () => {
    const response = fermat(25);
    console.log('response', response);
    expect(response).toEqual({
      a: 5,
      b: 5
    });
  });
  it('should return two factors', () => {
    const response = fermat(89);
    console.log('response', response);
    expect(response).toEqual({
      a: 1,
      b: 89
    });
  });
  it('should return two factors', () => {
    const response = fermat(731022);
    console.log('response', response);
    expect(response).toEqual({
      a: 2,
      b: 365511
    });
  });
});
