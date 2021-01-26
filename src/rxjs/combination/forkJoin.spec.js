const { forkJoin, of, interval } = require('rxjs');
const { delay, take } = require('rxjs/operators');

const myPromise = val =>
    new Promise(resolve =>
        setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
    );

const example = forkJoin({
    sourceOne: of('Hello'),
    sourceTwo: of('World').pipe(delay(1000)),
    sourceThree: interval(1000).pipe(take(1)),
    sourceFour: interval(1000).pipe(take(2)),
    sourceFive: myPromise('RESULT')
})

test('Observables completing after different durations', done => {
    example.subscribe(val => {
        expect(val).toStrictEqual({
            sourceOne: "Hello",
            sourceTwo: "World",
            sourceThree: 0,
            sourceFour: 1,
            sourceFive: "Promise Resolved: RESULT"
        });
        done();
    })
})