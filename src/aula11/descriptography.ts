import { inversaModular } from '../aritimetica-modular/inversa-modular';
import { potenciaModularPositiveValues } from '../aritimetica-modular/potencia-modular';
import {  getNumberFI } from '../aula10';
import { blocoToCaracter } from '../rsa/rsa';

export function getPrivateKey(e: number, n: number) {
  const fi = getNumberFI(n);
  const result = inversaModular({
    beta: e,
    n: fi
  });
  return result;
}

export function decodeB(bloco: number, n: number, d: number) {
  const resultArray = potenciaModularPositiveValues({
    base: bloco,
    expoente: d,
    modulo: n
  });
  const result = resultArray.pop();
  return result;
}

export function decryptPublicKey(blocos: number[], n: number, d: number) {
  const encryptedBlocks: number[] = [];
  blocos.forEach((bloco) => {
    const encryptedBlock = decodeB(bloco, n, d);
    encryptedBlocks.push(encryptedBlock);
  });
  return encryptedBlocks;
}

export const decryptRSA = (blocos: number[], n: number, d: number) => {
  const decrypted = decryptPublicKey(blocos, n, d);
  return {
    decrypted,
    decryptedMessage: blocoToCaracter(decrypted)
  };
};

// const nValue = 209;
// const encryptedResponse = encrypt('caldo', nValue);
// console.log('encryptedResponse', encryptedResponse);
// const privateKey = getPrivateKey(encryptedResponse.e, nValue);
// console.log(decryptRSA(encryptedResponse.encrypted, nValue, privateKey));
