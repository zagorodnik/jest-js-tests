const { of } = require('rxjs');



test('test of operator', done => {
    const result = [1, 2, 3, 4, 5];
    const source = of(...result);

    source.subscribe(val => {
        expect(val).toEqual(result.shift());

        if (!result.length)
            done();
    });
});