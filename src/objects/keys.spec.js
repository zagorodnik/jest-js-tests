const arr = ['a', 'b', 'c'];
test('return keys of simple array', () => {
    expect(Object.keys(arr)).toEqual(['0', '1', '2']);
});

const obj = { 0: 'a', 1: 'b', 2: 'c' };
test('return keys of object', () => {
    expect(Object.keys(arr)).toEqual(['0', '1', '2']);
});

const anObj = { 100: 'a', 2: 'b', 7: 'c' };
test('array-like object with random key ordering', () => {
    expect(Object.keys(anObj)).toEqual(['2', '7', '100']);
});

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
test('return myObj keys', () => {
    expect(Object.keys(myObj)).toEqual(['foo']);
});