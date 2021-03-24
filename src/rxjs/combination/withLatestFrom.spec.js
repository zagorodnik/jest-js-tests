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

const bhvSubj = new BehaviorSubject('value1');
const subj = new Subject();

const myObservable = subj.pipe(withLatestFrom(bhvSubj), map(x => x[1]));

test('test withLatestFrom with subject and behavior subjects', done => {
    myObservable.subscribe((value) => {
        expect(value).toStrictEqual('value1');
        done();
    });
    subj.next('value22');
});