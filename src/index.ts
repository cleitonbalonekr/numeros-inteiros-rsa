import fs from 'fs';
import { encrypt } from './aula10';
import { decryptRSA, getPrivateKey } from './aula11/descriptography';

function main() {
  try {
    const data = fs.readFileSync('src/plain.txt', 'utf8');
    const n = 209;
    const encryptResponse = encrypt(data, n);
    fs.writeFileSync(
      'src/generated/encrypted/encrypted.txt',
      encryptResponse.encrypted.join('')
    );
    const decryptedResponse = decryptRSA(
      encryptResponse.encrypted,
      n,
      getPrivateKey(encryptResponse.e, n)
    );
    fs.writeFileSync(
      'src/generated/decrypted/decrypted.txt',
      decryptedResponse.decryptedMessage.join('')
    );
  } catch (err) {
    console.error(err);
  }
}
main();
