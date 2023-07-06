const createCounter2 = require('./counter2')

test('createCounter2 is a function', () =>{
    expect(createCounter2).toBeDefined();
});

describe('createCounter2',()=>{
    beforeEach(()=>{
        jest.spyOn(console,'log')
    });

    afterEach(()=>{
        console.log.mockRestore();
    })

    it('the increment function increase current value by 1, the decrement decreases current value by 1 and reset function resets current val to init',()=>{
        const counter2 = createCounter2(5);

        counter2.increment();
        counter2.reset();
        counter2.decrement();

        expect(console.log.mock.calls.length).toBe(3);
        expect(console.log.mock.calls[0][0]).toBe(6);
        expect(console.log.mock.calls[1][0]).toBe(5);
        expect(console.log.mock.calls[2][0]).toBe(4);
    });
});