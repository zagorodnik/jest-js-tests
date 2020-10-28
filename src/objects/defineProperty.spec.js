let object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

test('defines a new property directly on an object', () => {
    expect(object1.property1).toBe(42);
});