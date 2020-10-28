let object1 = {};

Object.defineProperties(object1, {
    property1: {
        value: 42,
        writable: false
    },
    property2: {
        value: 43,
        writable: false
    }
});

test('defines a new properties directly on an object', () => {
    expect(object1.property1).toBe(42);
});


var object2 = {};
Object.defineProperties(object2, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});

test('defines a new properties directly on an object', () => {
    expect(object2.property2).toBe("Hello");
});