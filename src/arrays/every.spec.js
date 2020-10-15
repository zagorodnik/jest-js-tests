const every = (array, fn) => {
    return array.every(fn);
}

let array1 = [12, 5, 8, 130, 44];
let array2 = [12, 54, 18, 130, 44];

function isBigEnough(element, index, array) {
    return element >= 10;
}

test('check if each element in array >= 10', () => {
    expect(every(array1, isBigEnough)).toBeFalsy();
})

test('check if each element in array >= 10', () => {
    expect(every(array2, isBigEnough)).toBeTruthy();
})