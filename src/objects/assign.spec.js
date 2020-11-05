let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

let obj1 = {
    a: {
        a: 1,
        b: {
            a: 2,
            b: 3
        }
    }
}

let obj2 = {
    a: {
        a: 2,
        b: {
            a: 3,
            b: 4
        }
    }
}

test('copies all enumerable own properties from two source objects to a target object ad return target object', () => {
    expect(Object.assign(target, source)).toEqual({"a": 1, "b": 4, "c": 5});
});

test('copies all enumerable own properties from two source objects with 3-level inheritance to a target object ad return target object', () => {
    expect(Object.assign(obj1, obj2)).toEqual({
        a: {
            a: 2,
            b: {
                a: 3,
                b: 4
            }
        }
    });
});

test('pass null and undefined into parameters', () => {
    expect(Object.assign(target, null, source, undefined)).toEqual({"a": 1, "b": 4, "c": 5})
});

test('pass empty object as first parameter', () => {
    expect(Object.assign({}, target, source)).toEqual({"a": 1, "b": 4, "c": 5})
});