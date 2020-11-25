const { Subject, ReplaySubject, BehaviorSubject } = require('rxjs');

test('Subject casts value to multiple observers', () => {
    const subj = new Subject();
    let result = [];
    subj.subscribe(value => result.push(value));
    subj.subscribe(value => result.push(value));
    subj.next(1);
    subj.next(2);

    expect(result[0]).toEqual(result[1]);
});

test('Replay subject is holding all values when you did not specify replay number', () => {
    const rplSubj = new ReplaySubject();
    let result = [1, 2];

    rplSubj.next(1);
    rplSubj.next(2);

    rplSubj.subscribe(value => {
        expect(value).toEqual(result);
    });
});

test('Replay subject is holding the last emitted value', () => {
    const rplSubj = new ReplaySubject(0);
    let result = [2];

    rplSubj.next(1);
    rplSubj.next(2);

    rplSubj.subscribe(value => {
        expect(value).toEqual(result);
    });
});

test('Replay subject is holding specified number of values', () => {
    const rplSubj = new ReplaySubject(0);
    let result = [2, 100];

    rplSubj.next(1);
    rplSubj.next(2);
    rplSubj.next(100);

    rplSubj.subscribe(value => {
        expect(value).toEqual(result);
    });
});

test('Behavior subject with initial value', () => {
    const bhvSubj = new BehaviorSubject(5);
    let result = [5];

    bhvSubj.subscribe(value => {
        expect(value).toEqual(result);
    });
});

test('Behavior subject with emitted value', () => {
    const bhvSubj = new BehaviorSubject(5);
    let result = [7];

    bhvSubj.next(6);
    bhvSubj.next(7);

    bhvSubj.subscribe(value => {
        expect(value).toEqual(result);
    });
});