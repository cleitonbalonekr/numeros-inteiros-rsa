/* eslint-disable no-plusplus */
/**
 *  Algoritmo euclidiano sxtendido
 *
 * entrada A e B
 *  Quero achar (ALFA) e (BETA)
 *
 *  r = a x + b y
 *
 *  a = ax-1 + by-1
 *  b = ax0 + by0
 *
 * até encontrar o resto 0
 *
 * rn = 0, verificar linha anterior: resto = MDC x = ALFA y = BETA
 *
 * a não pode ser divivel por b (o sistema deve retornar 10 , 1 , -1), de tal forma q nem alfa e beta sejam 0
 *
 * como seria o resultado se b fosse divisel por a
 */

import { mdc as mdcCalc } from '../mdc/mdc';

export const calculaEuclidianoEstendido = (a: number, b: number) => {
  const matriz = [
    [a, '*', 1, 0],
    [b, '*', 0, 1]
  ];

  let i = 0;
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const r = (matriz[i][0] as number) % (matriz[i + 1][0] as number);
    const q = Math.floor(
      (matriz[i][0] as number) / (matriz[i + 1][0] as number)
    );
    let x = (matriz[i][2] as number) - q * (matriz[i + 1][2] as number);
    const y = (matriz[i][3] as number) - q * (matriz[i + 1][3] as number);

    if (a % b === 0) {
      x = 1;
      const mdc = mdcCalc(a, b);
      const y2 = -(x * a - mdc) / b;

      matriz.push([mdc, q, x, y2]);
      break;
    } else {
      i++;
      matriz.push([r, q, x, y]);
    }

    if (r === 0) break;
  }

  // console.log(matriz)

  const resultado =
    a % b
      ? [
          matriz[matriz.length - 2][0],
          matriz[matriz.length - 2][2],
          matriz[matriz.length - 2][3]
        ]
      : [
          matriz[matriz.length - 2][0],
          matriz[matriz.length - 1][2],
          matriz[matriz.length - 1][3]
        ];

  return {
    mdc: resultado[0] as number,
    a: resultado[1] as number,
    b: resultado[2] as number
  };
};

// calculaEuclidianoEstendido(14, 35);
// calculaEuclidianoEstendido(252, 180);
// calculaEuclidianoEstendido(6643, 2873);
// calculaEuclidianoEstendido(50, 10);
