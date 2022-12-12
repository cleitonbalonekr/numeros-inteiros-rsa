/* eslint-disable no-plusplus */
// se for menor que a metade pega negativo
// se for zero todos vão ser zero
// se for 1 é um novo ciclo
// busque resulado de menor magnitude
// 3) escreva um algoritimo para calcular a potenciação x^y módilo n.
// Aceleração: - quando achar valor 0 e quando achar valor 1
type Input = {
  modulo: number;
  value: number;
};
export function congruenciaModular({ modulo, value }: Input) {
  const result = value % modulo;
  if (Math.abs(result) > modulo / 2) {
    return result > 0 ? result - modulo : result + modulo;
  }
  return result;
}
type PotenciaInput = {
  modulo: number;
  base: number;
  expoente: number;
};
export function potenciaModular({ base, expoente, modulo }: PotenciaInput) {
  const array = [1];
  const mod1 = congruenciaModular({
    modulo,
    value: base
  });
  for (let index = 0; index < expoente; index++) {
    const newValue = mod1 * array[index];
    const newMod = congruenciaModular({
      modulo,
      value: newValue
    });
    array.push(newMod);
    if (newMod === 0) {
      return [...array, ...Array(expoente - index - 1).fill(0)];
    }
  }

  return array;
}

export function potenciaModularPositiveValues({
  base,
  expoente,
  modulo
}: PotenciaInput) {
  const array = [1];
  const mod1 = base % modulo;
  for (let index = 0; index < expoente; index++) {
    const newValue = mod1 * array[index];
    const newMod = newValue % modulo;
    array.push(newMod);
    if (newMod === 0) {
      return [...array, ...Array(expoente - index - 1).fill(0)];
    }
  }

  return array;
}

// console.log('reponse: x = 8 mod22  -> ',congruenciaModular({
//  modulo:22,
// value:8
// }) )

// console.table(
//   potenciaModular({
//     base: 10,
//     expoente: 7,
//     modulo: 15
//   })
// );
