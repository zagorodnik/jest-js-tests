const reduce = require('./reduce');

const arrayNum = [1, 2, 3, 4, 5];
let reducer = (accumulator, currentValue) => accumulator + currentValue;

test('return array as single output value', () => {
    expect(reduce(arrayNum, reducer)).toBe(15)
});

test('return array with reducer custom values as single output value', () => {
    let reducer = (accumulator, currentValue) => 5 + currentValue
    expect(reduce(arrayNum, reducer)).toEqual(10)
});

test('return array with reducer custom values as single output value', () => {
    let reducer = (accumulator, currentValue) => accumulator + 5
    expect(reduce(arrayNum, reducer)).toEqual(21)
});

