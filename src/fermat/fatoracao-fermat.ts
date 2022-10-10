/* eslint-disable no-plusplus */
/* eslint-disable no-unreachable-loop */
/* eslint-disable consistent-return */
function formatResponse(x: number, y: number) {
  const a = x - y;
  const b = x + y;
  return { a, b };
}

export function isPrimo(input: number) {
  for (let index = 2; index < input; index++) {
    if (input % index === 0) {
      return false;
    }
  }
  return input > 1;
}

export function fermat(input: number) {
  // par
  if (input % 2 === 0) {
    return {
      a: 2,
      b: input / 2
    };
  }
  // quadrado perfeitos
  const sqrt = Math.sqrt(input);
  if (Number.isInteger(sqrt)) {
    return { a: sqrt, b: sqrt };
  }
  // primo

  if (isPrimo(input)) {
    return { a: 1, b: input };
  }

  while (1) {
    let x = Math.floor(Math.sqrt(input));

    if (input === x * x) {
      return {
        a: x,
        b: x
      };
    }
    x += 1;
    const y = Math.sqrt(x * x - input);
    if (Number.isInteger(y)) {
      return formatResponse(x, y);
    }
    // input é primo
    if (x === (input + 1) / 2) {
      return {
        a: 1,
        b: input
      };
    }
  }
}
