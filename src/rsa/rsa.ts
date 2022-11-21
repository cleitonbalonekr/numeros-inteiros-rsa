export const digitToCaracter = (input: number) => input.toString();
export const caracterToNumber = (input: string) => Number(input);

const KEY = 100;

export const caracterToCode = (input: string) => {
  const ascii = input.charCodeAt(0);
  return ascii + KEY;
};
export const codeToCaracter = (input: number) => {
  const caracter = input - KEY;
  return String.fromCharCode(caracter);
};
console.table({
  x: digitToCaracter(5),
  inv: caracterToNumber('5'),
  code: codeToCaracter(222)
});
