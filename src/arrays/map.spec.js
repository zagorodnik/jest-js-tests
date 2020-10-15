const map = (array) => {
    return array.map(Math.sqrt);
}

const arrayNum = [25, 36, 49];

test('define sqrt of each number', () => {
    expect(map(arrayNum)).toEqual([5, 6, 7])
})