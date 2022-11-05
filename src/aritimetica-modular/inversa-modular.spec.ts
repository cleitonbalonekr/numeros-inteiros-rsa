import { inversaModular, listOfInversaModular } from './inversa-modular';

describe('inversaModular', () => {
  it('should return correct mdc, a and b', () => {
    const response = inversaModular({
      beta: 2,
      n: 15
    });
    expect(response).toEqual(8);
  });
  it('should return correct mdc, a and b', () => {
    const response = listOfInversaModular(7);
    const expected = [
      {
        i: 1,
        b: 1
      },
      {
        i: 2,
        b: 4
      },
      {
        i: 3,
        b: 5
      },
      {
        i: 4,
        b: 2
      },
      {
        i: 5,
        b: 3
      },
      {
        i: 6,
        b: 6
      }
    ];
    expect(response).toEqual(expected);
  });
});
