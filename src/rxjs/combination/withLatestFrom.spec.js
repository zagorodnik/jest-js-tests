const { withLatestFrom, take } = require('rxjs/operators');
const { interval } = require('rxjs');

const example = interval(250).pipe(
    take(3),
    withLatestFrom(interval(350).pipe(take(3)))
)

test('test withLatestFrom', done => {
    example.subscribe(val => {
        expect(val).toStrictEqual([1, 0]);
        done();
    })
});