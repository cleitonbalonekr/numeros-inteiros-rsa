export function euclidianoEstendido(a: number, b: number) {
  const x = [1, 0];
  const y = [0, 1];
  let resto = b;
  while (b !== 0) {
    const q = Math.floor(a / b);
    resto = a % b;
    if (resto === 0) {
      return {
        mdc: 10,
        a: 1,
        b: 1 - q
      };
    }
    a = b;
    b = resto;
    const newX = x.at(-2)! - q * x.at(-1)!;
    x.push(newX);
    const newY = y.at(-2)! - q * y.at(-1)!;
    y.push(newY);
  }

  return {
    mdc: a,
    a: x.at(-2),
    b: y.at(-2)
  };
}
