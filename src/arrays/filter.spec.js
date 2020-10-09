const filter = require('./filter');

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

test('find words with number of letters more than 6', () => {
    expect(filter(words)).toEqual(['exuberant', 'destruction', 'present']);
})