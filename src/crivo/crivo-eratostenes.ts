/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable for-direction */

function getPrimes(array: boolean[]) {
  const primes = [];
  for (let j = 1; j < array.length; j++) {
    if (array[j]) {
      const prime = 2 * j + 1;
      primes.push(prime);
    }
  }
  primes.unshift(2);
  return primes;
}
export function crivoEratostenes(input: number) {
  if (input % 2 === 0) {
    input -= 1;
  }
  const size = (input + 1) / 2;
  const array: boolean[] = Array(size).fill(true);
  for (let p = 3; p * p <= input; p += 2) {
    const index = (p - 1) / 2;
    if (array[index]) {
      for (let t = p * p; t <= input; t += 2 * p) {
        const indexFor = (t - 1) / 2;
        array[indexFor] = false;
      }
    }
  }
  return getPrimes(array);
}
