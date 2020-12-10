const { every } = require('rxjs/operators');
const { of } = require('rxjs');

const source = of(1, 2, 3, 4, 5);
const example = source.pipe(
  every(val => val % 2 === 0)
);

test('test every operator', done => {
    example.subscribe(val => {
        expect(val).toBeFalsy();
    });
});
