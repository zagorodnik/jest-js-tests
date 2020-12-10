const { of } = require('rxjs');

const source = of(1, 2, 3, 4, 5);

test('test of operator', () => {
    source.subscribe(val =>
        expect(val).toEqual(source));
});