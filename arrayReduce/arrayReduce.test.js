const reduce = require('./arrayReduce');

test('reduce is a function', () => {
  expect(reduce).toBeDefined();
});

describe('reduce', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should reduce the elements in the nums array using the provided reducer function and initial value, and log the result', () => {
    const nums = [1, 2, 3, 4];
    const reducer = (accum, curr) => accum + curr;

    reduce(nums, reducer, 0);

    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe(10);
  });
});