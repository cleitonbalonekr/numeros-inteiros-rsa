import fs from 'fs';
import { encrypt } from './aula10';
import { decryptRSA, getPrivateKey } from './aula11/descriptography';

const ENCRYPTED_PATH = 'src/generated/encrypted/encrypted.txt';
const DECRYPTED_PATH = 'src/generated/decrypted/decrypted.txt';

function ecryptFile(n: number) {
  const data = fs.readFileSync('src/plain.txt', 'utf8');
  const encryptResponse = encrypt(data, n);
  fs.writeFileSync(ENCRYPTED_PATH, encryptResponse.encrypted.join('-'));
  return encryptResponse.e;
}
function decryptFile(n: number, e: number) {
  const dataEncrypted = fs.readFileSync(ENCRYPTED_PATH, 'utf8');
  const decryptedResponse = decryptRSA(
    dataEncrypted.split('-') as unknown as number[],
    n,
    getPrivateKey(e, n)
  );
  fs.writeFileSync(DECRYPTED_PATH, decryptedResponse.decryptedMessage.join(''));
}

function main() {
  try {
    const n = 209;
    const publicKey = ecryptFile(n);
    decryptFile(n, publicKey);
  } catch (err) {
    console.error(err);
  }
}
main();
