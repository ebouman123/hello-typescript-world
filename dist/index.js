"use strict";
console.log("Hello, World");
let age;
let person = ["Evan", 31];
let mySize = 3;
console.log("mySize ->", mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(80_000, 2022);
let employee = {
    id: 1,
    name: "Evan",
    retire: (date) => {
        console.log(date);
    },
};
let jennifer = {
    id: 2,
    name: "Jennifer",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
let typeQuantity = 100;
function greet(name) {
    if (name)
        console.log('Hello, ' + name.toUpperCase());
    else
        console.log('Hello');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday);
//# sourceMappingURL=index.js.map