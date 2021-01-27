const { empty } = require('rxjs');
const { startWith } = require('rxjs/operators');

const example = empty().pipe(startWith(7));

test('Emit the number 7, then complete', done => {
    example.subscribe(val => {
        expect(val).toBe(7);
        done();
    })
});