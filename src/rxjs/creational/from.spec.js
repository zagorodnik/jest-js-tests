const { from } = require('rxjs');

test('Observable from array', (done) => {
    const arraySource = from([1, 2, 3, 4, 5]);
    const subscribe = arraySource.subscribe(
        val => expect(val).toEqual(1, 2, 3, 4, 5)
    );
    done();
});

test('Observable from promise', (done) => {
    const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    const subscribe = promiseSource.subscribe(
        val => expect(val).toEqual('Hello World!')
    );
    done();
});

test('Observable from string', (done) => {
    const source = from('Hello World');
    const subscribe = source.subscribe(
        val => expect(val).toEqual('H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd')
    );
    done();
});