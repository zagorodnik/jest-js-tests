const { withLatestFrom, take, map } = require('rxjs/operators');
const { interval, BehaviorSubject, Subject } = require('rxjs');

const example = interval(250).pipe(
    take(3),
    withLatestFrom(interval(350).pipe(take(3)))
)

test('test withLatestFrom', done => {
    example.subscribe(val => {
        expect(val).toStrictEqual([1, 0],);
        done();
    })
});

const bhvSubj1 = new BehaviorSubject('value1');
const subj2 = new Subject();

const myObservable = subj2.pipe(withLatestFrom(bhvSubj1), map(x => x[1]));

test('test withLatestFrom with behavior subjects', done => {
    console.log(1);
    myObservable.subscribe((value) => {
        console.log(3);
        expect(value).toStrictEqual('value1');
        done();
    });
    console.log(2);
    subj2.next('value22');
});