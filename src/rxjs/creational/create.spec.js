const { Observable } = require('rxjs');

const example = Observable.create(function (observer) {
    observer.next('first value');
    observer.next('second value');
    observer.complete();
});

test('Observable emits multiple values', done => {
    example.subscribe(val => {
        expect(val).toBe('first value');
        done();
    });

    example.subscribe(val => {
        expect(val).toBe('second value');
        done();
    });
});