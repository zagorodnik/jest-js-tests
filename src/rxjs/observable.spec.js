const { from, of } = require('rxjs');

test('the observable emits hello', done => {
    let value = 'hello';
    of(value).subscribe( data => {
      expect(data).toBe(value);
      done();
    });
});

test('the observable interval emits multiple time with step 100', done => {
    let last = 100;
    from([100, 200, 300])
    .subscribe({
        next: val => {
            expect(val).toBe(last)
            last += 100
          },
        complete: () => done(),
    });
});

// hot vs cold