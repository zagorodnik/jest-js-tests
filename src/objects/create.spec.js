let person = {
    isAdult: false,
    description: function () {
        return `My name is ${this.name}. Am I adult? ${this.isAdult}`;
    }
};

const me = Object.create(person);

me.isAdult = true;
me.name = 'Alex';

test('display newly created object with modified properties', () => {
    expect(me.description()).toBe(`My name is Alex. Am I adult? true`);
});

test('create null object', () => {
    expect(Object.create(null)).toEqual({})
})

test('create empty object', () => {
    expect(Object.create({})).toEqual({})
})