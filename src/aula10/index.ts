/* eslint-disable no-plusplus */
import { fermat } from '../fermat/fatoracao-fermat';
import { mdc } from '../mdc/mdc';
import { potenciaModularPositiveValues } from '../aritimetica-modular/potencia-modular';

export const findNumber = (value: number, array: number[]) =>
  !!array.find((v) => v === value);
// console.log('findNumber', findNumber(15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

export function getFI(n: number) {
  const fatores = fermat(n);
  const { a, b } = fatores as { a: number; b: number };
  return (a - 1) * (b - 1);
}
// 540 resposta
// console.log('φ: ', getFI(589));

export function getE(n: number) {
  const φ = getFI(n);
  for (let e = 2; e <= φ; e++) {
    const possibleE = mdc(e, φ);
    if (possibleE === 1 && n % e !== 0) {
      return e;
    }
  }
  return 0;
}

// Resposta 7
// console.log('E: ', getE(589));
console.log('E: ', getE(12829));

export function codeB(b: number, n: number) {
  const e = getE(n);
  const resultArray = potenciaModularPositiveValues({
    base: b,
    expoente: e,
    modulo: n
  });
  const result = resultArray.pop();
  return result;
  // return b ** e % n;
}
// console.log('codeB: ', codeB(10, 589));
