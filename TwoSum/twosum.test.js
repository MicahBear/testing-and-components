const twoSum = require('./twosum');



test('twoSum is a function', () => {
  expect(twoSum).toBeDefined();
});

describe('twoSum', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('returns the correct indices of two numbers that add up to the target sum', () => {
    twoSum([2, 7, 11, 15], 9);

    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toEqual([0, 1]);
  });
});


