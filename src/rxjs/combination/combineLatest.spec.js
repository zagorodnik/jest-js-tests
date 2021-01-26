const { from, combineLatest, timer } = require('rxjs');
//TODO add subjects
test('combineLatest combines latests values', () => {
    const source = timer(0, 100);
    const source1 = timer(50, 100);
    let example = combineLatest(source, source1);

    (done) => {
        example.subscribe(val => {
            // setTimeout(() => {
            expect(val).toEqual([0, 0]);
            done();
            // }, 1000)
        });
    }
});