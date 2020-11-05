let obj1 = { a: 12 };

test('Return property descriptor of obj1', () => {
    expect(Object.getOwnPropertyDescriptor(obj1, 'a')).toEqual({
        configurable: true,
        enumerable: true,
        value: 12,
        writable: true
    });
});

let obj2 = {[Symbol.for('baz')]: 73};

test('Return property descriptor of obj2', () => {
    expect(Object.getOwnPropertyDescriptor(obj2, Symbol.for('baz'))).toEqual({
        configurable: true,
        enumerable: true,
        value: 73,
        writable: true
    });
});

let obj3 = {};

Object.defineProperty(obj3, 'a', {
    value: 2,
    writable: false,
    enumerable: false
  });

test('Return property descriptor of obj3', () => {
    expect(Object.getOwnPropertyDescriptor(obj3, 'a')).toEqual({
        value: 2,
        writable: false,
        enumerable: false,
        configurable: false
    });
});