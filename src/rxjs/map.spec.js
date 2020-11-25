const { from } = require('rxjs');
const { map } = require('rxjs/operators');

const source = from([{ name: 'apple', amount: 2 }, { name: 'orange', amount: 3 }]);
const example = source.pipe(map(fruit => {
    fruit.amount += 2;
    return fruit;
}));

test('Map', done => {
    example.subscribe(value => {
        expect(value.amount).toEqual(4);
        done();
    });
});