const { startWith } = require('rxjs/operators');
const { of } = require('rxjs');

const source = of(1, 2, 3);
const example = source.pipe(startWith(0));
test('startWith on number sequence', done => {
    example.subscribe(val => {
        expect(val).toBe(0, 1, 2, 3);
        done();
    })
})
