/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
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

export const blocoToCaracter = (input: number[]) => input.map(codeToCaracter);

// console.table({
//   x: digitToCaracter(5),
//   inv: caracterToNumber('5'),
//   code: codeToCaracter(222)
// });

export function wordToCode(input: string) {
  let encrypted = '';
  for (const char of input) {
    const code = caracterToCode(char);
    encrypted = `${encrypted}${code}`;
  }
  return encrypted;
}
// console.log(wordToCode('CARRO'));

function notStartsWithZero(input: string) {
  for (let index = input.length - 1; index > 0; index--) {
    if (Number(input[index]) !== 0) {
      return index;
    }
  }
  return 0;
}

export function encryptRSA(message: string, n: number) {
  let encrypted = '';
  let newArray = message;
  for (let key = 0; key < newArray.length + 1; key++) {
    const actualValue = newArray.substring(0, key);
    if (Number(actualValue) >= n) {
      if (Number(newArray[key - 1]) === 0) {
        const newIndex = notStartsWithZero(actualValue);
        encrypted = `${encrypted}${newArray.substring(0, newIndex)}-`;
        newArray = newArray.substring(newIndex, newArray.length + 1);
      } else {
        encrypted = `${encrypted}${newArray.substring(0, key - 1)}-`;
        newArray = newArray.substring(key - 1, newArray.length + 1);
      }
      key = 0;
    }
  }
  return encrypted + newArray;
}
// console.log(encryptRSA(wordToCode('caldo'), 209));
