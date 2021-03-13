const main = require('../public/main');
//import sum from '../public/main'

test('adds 1 + 2 to equal 3', () => {
    expect(main.sumTest(1, 2)).toBe(3);
});

//Random Number tests
test('Generates random number between 9 and 0', () => {
    let test = main.randomNumberTest(10, 0)
    expect(test).toBeGreaterThanOrEqual(0)
    expect(test).toBeLessThan(10)

});

test('Generates random number between 20 and 0', () => {
    let test = main.randomNumberTest(20, 0)
    expect(test).toBeGreaterThanOrEqual(0)
    expect(test).toBeLessThan(20)

});

test('Generates random number between 1 and 0', () => {
    let test = main.randomNumberTest(2, 0)
    expect(test).toBeGreaterThanOrEqual(0)
    expect(test).toBeLessThan(2)

});


