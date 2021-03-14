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
    let subFrictionTest = main.subtractedFrictionTest()
    expect(subFrictionTest.speedX).toBe(9.9)
});

test('Check friction is added', () => {
    let addFrictionTest = main.addedFrictionTest()
    expect(addFrictionTest.speedX).toBe(-1.9)
});

test('Checks creation of ball object', () => {
    let ballTest = main.ballTest()
    expect(ballTest.x).toBe(100)
    expect(ballTest.y).toBe(100)
    expect(ballTest.size).toBe(7)
    expect(ballTest.drag).toBe(0.4)
    expect(ballTest.speedX).toBe(10)
    expect(ballTest.speedY).toBe(10)
});


