const { from } = require('rxjs');
const { tap } = require('rxjs/operators');

let arr = [];
const source = from([{ name: 'apple', amount: 2 }, { name: 'orange', amount: 3 }]);
const example = source.pipe(tap(fruit => {
    fruit.amount += 2;
    arr.push(fruit);
}));

test('Tap', done => {
    example.subscribe(value => {
        expect(value.amount).toEqual(4);
        done();
    });
});