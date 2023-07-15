const logicDrills = require('./logicDrills')

test('logicDrills is a function', () => {
  expect(logicDrills).toBeDefined();
});

describe('logicDrills', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('The inner function logs the counter value and increments it each time it is called', () => {
    const current = 'yellow';

    logicDrills(current)

    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toBe('red');;
  });
});
