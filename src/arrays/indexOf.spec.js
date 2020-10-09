const indexOf = require('./indexOf');

const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];

test('return element index', () => {
    expect(indexOf(animals, 'bison')).toEqual(1);
});

test('return element index', () => {
    expect(indexOf(animals, 'dog')).toEqual(-1);
});