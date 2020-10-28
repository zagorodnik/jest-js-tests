var obj = {};
var obj2 = Object.preventExtensions(obj);

test('check if objects are the same', () => {
    expect(obj === obj2).toBe(true);
});

let empty = {};

test('check if object extensible by default', () => {
    expect(Object.isExtensible(empty)).toBe(true);
});

test('check again if object extensible', () => {
    Object.preventExtensions(empty);
    expect(Object.isExtensible(empty)).toBe(false);
});

let nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);

// Object.defineProperty(nonExtensible, 'new', {
//   value: 8675309
// });

// test('check new value', () => {
//     expect(nonExtensible.new).toBeUndefined();
// });
