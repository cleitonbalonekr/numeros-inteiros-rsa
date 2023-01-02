/* eslint-disable no-alert */
/* eslint-disable consistent-return */
import { encrypt } from './aula10';
import { decryptRSA, getPrivateKey } from './aula11/descriptography';

export function ecryptFile(data: string, n: number) {
  const encryptResponse = encrypt(data, n);
  return {
    e: encryptResponse.e,
    encrypted: encryptResponse.encrypted.join('-')
  };
}
export function decryptFile(n: number, e: number, dataEncrypted: string) {
  const decryptedResponse = decryptRSA(
    dataEncrypted.split('-') as unknown as number[],
    n,
    getPrivateKey(e, n)
  );
  return {
    decrypted: decryptedResponse.decryptedMessage.join('')
  };
}

async function writeFile(fileHandle: any, contents: string) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
}
async function getNewFileHandle(suggestedName?: string) {
  const options = {
    suggestedName,
    types: [
      {
        description: 'Text Files',
        accept: {
          'text/plain': ['.txt']
        }
      }
    ]
  };
  const handle = await (window as any).showSaveFilePicker(options);
  return handle;
}

const encryptButton = document.getElementById('encrypt') as HTMLElement;
const decryptButton = document.getElementById('decrypt') as HTMLElement;

const getN = () =>
  Number((document.getElementById('n-value') as HTMLInputElement).value);
const getEFromInput = () =>
  Number((document.getElementById('e-value') as HTMLInputElement).value);

const throwNError = (key: string) => alert(`Selecione o valor${key}`);

encryptButton.onclick = async () => {
  const n = getN();
  if (!n) return throwNError('N');
  const [fileHandle] = await (window as any).showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  const { encrypted, e } = ecryptFile(contents, n);
  const writeFileHandle = await getNewFileHandle('encrypted.txt');
  writeFile(writeFileHandle, encrypted);
  alert(`Anote o E: ${e}\n ele é necessário para descriptografar`);
};
decryptButton.onclick = async () => {
  const n = getN();
  const e = getEFromInput();
  if (!n) return throwNError('N');
  if (!e) return throwNError('E');
  const [fileHandle] = await (window as any).showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  const { decrypted } = decryptFile(n, e, contents);
  const writeFileHandle = await getNewFileHandle('dcrypted.txt');
  writeFile(writeFileHandle, decrypted);
};
