const { merge, interval } = require('rxjs');
const { mapTo } = require('rxjs/operators');

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = merge(
    first.pipe(mapTo(1)),
    second.pipe(mapTo(2)),
    third.pipe(mapTo(3)),
    fourth.pipe(mapTo(4))
);

test('merging multiple observables, static method', done => {
    example.subscribe(val => {
        expect(val).toBe(4, 3, 2, 4, 1, 3, 4);
        done();
    })
})