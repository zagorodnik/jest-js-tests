const find = (array, number) => {
    return array.find(element => element > number);
}

const arrayNum = [5, 12, 8, 130, 44];

test('find elements grater than 120 in array', () => {
    expect(find(arrayNum, 120)).toEqual(130);
});

test('check what function returns when can not find anything', () => {
    expect(find(arrayNum, 130)).toBeUndefined();
})