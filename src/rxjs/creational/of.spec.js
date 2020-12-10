const { of } = require('rxjs');

const source = of(1, 2, 3, 4, 5);

test('test of operator', done => {
    source.subscribe(val => {
        expect(val).toEqual(1)
        done();
    });
});