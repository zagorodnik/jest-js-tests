let proto = {};
let obj = Object.create(proto);

test('compare obj prototype and proto itself', () => {
    expect(Object.getPrototypeOf(obj) === proto).toBeTruthy();
});