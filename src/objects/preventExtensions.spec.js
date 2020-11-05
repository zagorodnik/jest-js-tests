var obj = {};
var obj2 = Object.preventExtensions(obj);

test('check if objects are the same', () => {
    expect(obj === obj2).toBeTruthy();
});

let empty = {};

test('check if object extensible by default', () => {
    expect(Object.isExtensible(empty)).toBeTruthy();
});

test('check again if object extensible', () => {
    Object.preventExtensions(empty);
    expect(Object.isExtensible(empty)).toBeFalsy();
});

// test('Trying to create new property', () => {
//     let nonExtensible = { removable: true };
//     Object.preventExtensions(nonExtensible);

//     expect(Object.defineProperty(nonExtensible, 'new1', {
//         value: 12
//     })).toThrow(TypeError);
// });
