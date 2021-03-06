const { defaultIfEmpty } = require('rxjs/operators');
const { of } = require('rxjs');

const example = of().pipe(defaultIfEmpty('Observable.of() Empty!'));
test('test defaultIfEmpty', done => {
    example.subscribe(val => {
        expect(val).toBe('Observable.of() Empty!');
        done();
    })
});
