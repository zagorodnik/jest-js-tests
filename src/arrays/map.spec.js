const map = (array) => {
    return array.map(Math.sqrt);
}

const arrayNum = [25, 36, 49];

test('project sqrt of each given number', () => {
    expect(map(arrayNum)).toEqual([5, 6, 7])
})