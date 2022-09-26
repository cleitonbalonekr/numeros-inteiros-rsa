export function mdc(a: number, b: number): number {
  if (a < b) {
    return mdc(b, a);
  }
  let resto = b;
  while (b !== 0) {
    resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}
