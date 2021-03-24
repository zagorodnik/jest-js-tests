const { combineLatest, Subject, BehaviorSubject } = require('rxjs');

const source = new BehaviorSubject('value1');
const source1 = new Subject();
const example = combineLatest(source, source1);

test('combineLatest combines latests values', done => {
    example.subscribe(val => {
        expect(val).toStrictEqual(['value1', 'new value']);
        done();
    });
    source1.next('new value');
});