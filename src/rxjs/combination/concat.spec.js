const { concat, of } = require('rxjs');

const example = concat(
    of(1, 2, 3),
    of(4, 5, 6),
    of(7, 8, 9)
);

test('Basic concat usage with three observables', done => {
    example.subscribe(val => {
        expect(val).toBe(1, 2, 3, 4, 5, 6, 7, 8, 9);
        done();
    })
});