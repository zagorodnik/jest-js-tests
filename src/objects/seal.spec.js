const obj = {
    prop() { },
    foo: 'bar'
};

obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

const o = Object.seal(obj);

test('determine objects are the same', () => {
    expect(o === obj).toBe(true);
})

test('check if object isSealed', () => {
    expect(Object.isSealed(obj)).toBe(true);
})

obj.foo = 'quux';
obj.quaxxor = 'the friendly duck';

test('check if new value added', () => {
    expect(obj.foo).toBeDefined();
});

test('check if new value added', () => {
    expect(obj.quaxxor).toBeUndefined();
});