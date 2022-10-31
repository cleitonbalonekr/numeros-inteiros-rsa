import { mdc } from "../mdc/mdc";

export function euclidianoEstendidoBackUp(a: number, b: number) {
  const x = [1, 0];
  const y = [0, 1];
  let resto = b;
  while (b !== 0) {
    const q = Math.floor(a / b);
    resto = a % b;
    if (resto === 0) {
      const mdc1 = mdc(a,b)
      return {
        //mdc: 10,
        mdc:mdc1,
        a: 1,
        b: -(a - mdc1)/b
      };
    }
    a = b;
    b = resto;
    //const newX = x.at(-2)! - q * x.at(-1)!;
    const newX = (x[x.length-2] - q) *( x[x.length-1]);
    x.push(newX);
    //const newY = y.at(-2)! - q * y.at(-1)!;
    const newY = (y[y.length-2] - q) *( y[y.length-1]);
    y.push(newY);
  }

  return {
    mdc: a,
    a: x[x.length-2],
    b: y[y.length-2]
  };
}

export function euclidianoEstendido(){

}