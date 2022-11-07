import {
  caracterToCode,
  caracterToNumber,
  codeToCaracter,
  digitToCaracter
} from './rsa';

describe('RSA module', () => {
  describe('digitToCaracter', () => {
    it('should return an string digit', () => {
      const response = digitToCaracter(5);
      console.log(response);

      expect(response).toEqual('5');
    });
    it('should return an string number', () => {
      const response = digitToCaracter(1745);
      expect(response).toEqual('1745');
    });
  });
  describe('caracterToNumber', () => {
    it('should return an number digit', () => {
      const response = caracterToNumber('5');
      expect(response).toEqual(5);
    });
    it('should return an number digit large', () => {
      const response = caracterToNumber('1745');
      expect(response).toEqual(1745);
    });
  });
  describe('cacacterToCode', () => {
    it('should return a ascii code + 100', () => {
      const response = caracterToCode('A');
      expect(response).toEqual(165);
    });
    it('should return a char', () => {
      const response = codeToCaracter(165);
      expect(response).toEqual('A');
    });
  });
});
