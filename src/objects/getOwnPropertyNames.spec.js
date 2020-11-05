let a = {};
Object.defineProperties(a, {
    one: {enumerable: true, value: 1},
    two: {enumerable: false, value: 2},
});

//the difference between Object.keys() and Object.getOwnPropertyNames()

test('return keys', () => {
    expect(Object.keys(a)).toEqual(["one"]);
});

test('return own property names', () => {
    expect(Object.getOwnPropertyNames(a)).toEqual(["one", "two"])
})