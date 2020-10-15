const indexOf = (array, value) => {
    return array.indexOf(value);
}

const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];

test('return element index', () => {
    expect(indexOf(animals, 'bison')).toEqual(1);
});

test('return element index', () => {
    expect(indexOf(animals, 'dog')).toEqual(-1);
});