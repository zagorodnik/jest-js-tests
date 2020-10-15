const some = (array, fn) => {
    return array.some(fn);
}

let array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

test('check if any element in array is even', () => {
    expect(some(array, even)).toBeTruthy();
})