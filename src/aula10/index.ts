/* eslint-disable no-plusplus */
import { fermat } from '../fermat/fatoracao-fermat';
import { mdc } from '../mdc/mdc';
import { potenciaModularPositiveValues } from '../aritimetica-modular/potencia-modular';
import { encryptRSA, wordToCode } from '../rsa/rsa';



export function getNumberFI(n: number) {
  const fatores = fermat(n)!;
  return (fatores.a - 1) * (fatores.b - 1);
}

export function getNumberE(n: number) {
  const fi = getNumberFI(n);
  for (let e = 2; e <= fi; e++) {
    
    const possibleE = mdc(e, fi);
    if (possibleE === 1 && fi % e !== 0) {
      return e;
    }
  }
  return 0;
}

export function findNumber(value: number, array: number[]) {
  return !!array.find((v) => v === value);
}

export function codeB(b: number, n: number) {
  const e = getNumberE(n);
  const resultArray = potenciaModularPositiveValues({
    base: b,
    expoente: e,
    modulo: n
  });
  const result = resultArray.pop();
  return result;
}
export function encryptPublicKey(text: string, n: number) {
  const blocksEncrypted: number[] = [];

  // @ts-ignore
  const blocos = text.split('-');

  blocos.forEach((bloco) => {
    const encryptedBlock = codeB(Number(bloco), n);
    blocksEncrypted.push(encryptedBlock);
  });
  
  return blocksEncrypted;
}

export const encrypt = (message: string, n: number) => {
  const blocosEncrypted = encryptRSA(wordToCode(message), n);

  const e = getNumberE(n);

  const encrypted = encryptPublicKey(blocosEncrypted, n);

  return { e,encrypted, blocosEncrypted};
};
