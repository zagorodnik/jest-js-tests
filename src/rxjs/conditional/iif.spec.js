const { iif, of } = require('rxjs');

let subscribeToFirst;

const example = iif(
    () => subscribeToFirst,
    of('first'),
    of('second'),
);

test('Change at runtime which Observable will be subscribed', done => {
    subscribeToFirst = true;
    example.subscribe(val => {
        expect(val).toBe('first');
        done();
    })
});

test('Change at runtime which Observable will be subscribed', done => {
    subscribeToFirst = false;
    example.subscribe(val => {
        expect(val).toBe('second');
        done();
    })
});