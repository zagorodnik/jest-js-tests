const find = (array) => {
    return array.find(element => element > 120);
}

const arrayNum = [5, 12, 8, 130, 44];

test('find elements grater than 120 in array', () => {
    expect(find(arrayNum)).toEqual(130);
})