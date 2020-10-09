const entries = require('./entries');

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

test('return a new Array Iterator object that contains the key/value pair', () => {
    expect(entries(words).next().value).toEqual([0, 'spray']);
});