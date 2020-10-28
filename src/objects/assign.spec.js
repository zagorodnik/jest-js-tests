let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

const assign = Object.assign(target, source);

test('copies all enumerable own properties from one or more source objects to a target object ad return target object', () => {
    expect(assign).toStrictEqual({"a": 1, "b": 4, "c": 5});
});