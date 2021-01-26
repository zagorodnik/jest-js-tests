const { every } = require('rxjs/operators');
const { of } = require('rxjs');

const given = [2, 4, 6, 7];
const oddFn = val => val % 2 === 0;
const source = of(...given);
const example = source.pipe(
  every(oddFn)
);

test('test every rxjs operator', done => {
  example.subscribe(val => {
    expect(val).toBeFalsy();

    done();
  });
});
