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

const MDC = require("../mdc/mdc");

const calculaEuclidianoEstendido = (a, b) => {
  let matriz = [
    [a, "*", 1, 0],
    [b, "*", 0, 1],
  ];

  let i = 0;
  while (1) {
    let r = matriz[i][0] % matriz[i + 1][0];
    let q = Math.floor(matriz[i][0] / matriz[i + 1][0]);
    let x = matriz[i][2] - q * matriz[i + 1][2];
    let y = matriz[i][3] - q * matriz[i + 1][3];

    if (a % b === 0) {
      x = 1;
      const mdc = MDC.mdc(a, b);
      const y = -(x * a - mdc) / b;

      matriz.push([mdc, q, x, y]);
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
          matriz[matriz.length - 2][3],
        ]
      : [
          matriz[matriz.length - 2][0],
          matriz[matriz.length - 1][2],
          matriz[matriz.length - 1][3],
        ];

  return resultado;
};

// calculaEuclidianoEstendido(14, 35);
// calculaEuclidianoEstendido(252, 180);
// calculaEuclidianoEstendido(6643, 2873);
// calculaEuclidianoEstendido(50, 10);

module.exports = { calculaEuclidianoEstendido };
