const createCounter = require('./counter');

test('createCounter is a function', () => {
  expect(createCounter).toBeDefined();
});

describe('createCounter', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('The inner function logs the counter value and increments it each time it is called', () => {
    const counter = createCounter(10);

    counter();
    counter();
    counter();

    expect(console.log.mock.calls.length).toBe(3);
    expect(console.log.mock.calls[0][0]).toBe(10);
    expect(console.log.mock.calls[1][0]).toBe(11);
    expect(console.log.mock.calls[2][0]).toBe(12);
  });
});
