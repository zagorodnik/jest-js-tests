let obj = { foo: 'bar', baz: 42 };

test('return array without enumerable keys', () => {
    expect(Object.entries(obj)).toEqual([ ['foo', 'bar'], ['baz', 42] ]);
});

let obj1 = { 100: 'a', 2: 'b', 7: 'c' };
test('return ordered array without enumerable keys', () => {
    expect(Object.entries(obj1)).toEqual([ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]);
});

test('return empty array', () => {
    expect(Object.entries(12)).toEqual([]);
});