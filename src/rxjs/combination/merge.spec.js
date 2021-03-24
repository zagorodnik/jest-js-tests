const { merge, interval, Subject, BehaviorSubject } = require('rxjs');
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
        expect(val).toStrictEqual(4, 3, 2, 4, 1, 1, 4);
        done();
    })
})

const subj1 = new Subject();
const subj2 = new Subject();

const myObservable = merge(subj1, subj2);

test('test merge with subjects', done => {
    let expected = [3, 2, 1];
    let actual = [3, 2, 1];
    myObservable.subscribe((value) => {
        console.log('3 times');
        expect(value).toEqual(expected.shift());
        if (!expected.length) {
            done();
        }
    });
    subj2.next(actual[0]);
    subj1.next(actual[1]);
    subj2.next(actual[2]);
});