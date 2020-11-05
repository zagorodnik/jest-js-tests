let obj = {
    x: 10,
    get number() {
        return this.x;
    },
};

test('Return property descriptors of obj', () => {
    expect(Object.getOwnPropertyDescriptors(obj)).toMatchObject({
        x: {
            value: 10,
            writable: true,
            enumerable: true,
            configurable: true
        },
        number: {
            get: expect.any(Function),
            set: undefined,
            enumerable: true,
            configurable: true
        }
    });
});

let cloneObj = Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
);

test('return property descriptors of cloneObj', () => {
    expect(cloneObj).toEqual({
        x: 10,
        number: 10
    });
});
