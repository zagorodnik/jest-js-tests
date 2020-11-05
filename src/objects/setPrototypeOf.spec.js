let obj1 = {
    getName: function () {
        return this.firstName
    }
}

let obj2 = {
    getName: function () {
        return this.firstName + " - is the best"
    }
}

let obj3 = Object.create(obj1, {
    firstName: {
        value: "Ukraine"
    }
});

test('return obj3 firstName.value', () => {
    expect(obj3.getName()).toEqual("Ukraine");
});

test('return prototype of given object and compare it with obj1', () => {
    expect(Object.getPrototypeOf(obj3) === obj1).toBeTruthy();
});

test('return obj3 firstName.value again', () => {
    // Change prototype of current object
    Object.setPrototypeOf(obj3, obj2);
    expect(obj3.getName()).toEqual("Ukraine - is the best");
});

test('return prototype of given object and compare it with obj2', () => {
    expect(Object.getPrototypeOf(obj3) === obj2).toBeTruthy();
});