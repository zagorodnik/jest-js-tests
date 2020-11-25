const { of } = require('rxjs');
const { tap } = require('rxjs/operators');

let isTapInvoked = false;
const source = of(null);
const example = source.pipe(tap(() => {
    isTapInvoked = true;
}));

test('Tap', done => {
    example.subscribe(() => {
        expect(isTapInvoked).toBeTruthy();
        done();
    });
});