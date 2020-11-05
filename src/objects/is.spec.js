test('determine 2 string values are the same', () => {
    expect(Object.is('foo', 'foo')).toBeTruthy();
});

test('determine 2 values are the same', () => {
    expect(Object.is(window, window)).toBeTruthy();
});

test('determine 2 string values are the same', () => {
    expect(Object.is('foo', 'bar')).toBeFalsy();
});

test('determine 2 empty arrays are the same', () => {
    expect(Object.is([], [])).toBeFalsy();
});

test('determine 2 numerable values are the same', () => {
    let foo = { a: 1 };
    let bar = { a: 1 };
    expect(Object.is(foo, bar)).toBeFalsy();
});

test('determine 2 null values are the same', () => {
    expect(Object.is(null, null)).toBeTruthy();
});

test('determine 0 and -0 values are the same', () => {
    expect(Object.is(0, -0)).toBeFalsy();
});

test('determine -0 and -0 values are the same', () => {
    expect(Object.is(-0, -0)).toBeTruthy();
});

test('determine NaN and NaN values are the same', () => {
    expect(Object.is(NaN, NaN)).toBeTruthy();
});