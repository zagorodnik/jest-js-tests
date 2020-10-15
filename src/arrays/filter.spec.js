const filter = (array, number) => {
    return array.filter(array => array.length > number);
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

test('find words with number of letters more than 6', () => {
    expect(filter(words, 6)).toEqual(['exuberant', 'destruction', 'present']);
});

test('check what filter returns when each element does not match condition', () => {
    expect(filter(words, 12)).toEqual([]);
});