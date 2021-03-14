const main = require('../public/main');

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

//Friction tests
test('Check friction is subtracted', () => {
    let ballTest = main.subtractedFrictionTest()
    expect(ballTest.speedX).toBe(9.9)
});

test('Check friction is added', () => {
    let ballTest = main.addedFrictionTest()
    expect(ballTest.speedX).toBe(-1.9)
});


