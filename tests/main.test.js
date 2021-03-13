const main = require('../public/main');
//import sum from '../public/main'

test('adds 1 + 2 to equal 3', () => {
    expect(main.sumTest(1, 2)).toBe(3);
});

//Random Number tests
test('Generates random number between 9 and 0', () => {
    let randomNumberTestOne = main.randomNumberTest(10, 0)
    expect(randomNumberTestOne).toBeGreaterThanOrEqual(0)
    expect(randomNumberTestOne).toBeLessThan(10)

});

test('Generates random number between 20 and 0', () => {
    let randomNumberTestTwo = main.randomNumberTest(20, 0)
    expect(randomNumberTestTwo).toBeGreaterThanOrEqual(0)
    expect(randomNumberTestTwo).toBeLessThan(20)

});

test('Generates random number between 1 and 0', () => {
    let randomNumberTestThree = main.randomNumberTest(2, 0)
    expect(randomNumberTestThree).toBeGreaterThanOrEqual(0)
    expect(randomNumberTestThree).toBeLessThan(2)

});


