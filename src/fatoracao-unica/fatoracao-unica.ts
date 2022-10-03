/* eslint-disable no-const-assign */
/* eslint-disable for-direction */
/* eslint-disable no-plusplus */
export type FatoracaoUnica = {
  base: number;
  expoente: number;
};

export function fatoracaoUnica(input: number) {
  let f = 2;
  while (f <= Math.sqrt(input)) {
    if (input % f === 0) {
      return f;
    }
    f++;
  }
  return 0;
}

export function fatoracao(input: number) {
  const response: FatoracaoUnica[] = [];
  function addFatoracao(n: number) {
    const valueExist = response.findIndex((value) => value.base === n);
    if (valueExist !== -1) {
      response[valueExist].expoente++;
    } else {
      response.push({
        base: n,
        expoente: 1
      });
    }
  }

  while (input !== 1) {
    const fat = fatoracaoUnica(input);
    if (fat === 0) {
      addFatoracao(input);
      input /= input;
    } else {
      addFatoracao(fat);
      input = Math.floor(input / fat);
    }
  }
  return response;
}
