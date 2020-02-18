"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function order1(a) {
    console.log("How about this");
    return function (_) {
        console.log(a);
    };
}
function order2(b) {
    console.log("How about that");
    return function (_) {
        console.log(b);
    };
}
let WhatFirst = class WhatFirst {
    constructor() { }
};
WhatFirst = __decorate([
    order1("would be SECOND"),
    order2("would be FIRST")
], WhatFirst);
function bridge(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
function bridge2(target, name, descripter) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descripter);
}
function bridge3(target, name, descripter) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descripter);
}
function bridge4(target, name, position) {
    console.log("parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Calculator {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
        this.FirstNewObj = "";
    }
    set price1(val1) {
        if (val1 > 0) {
            this.number1 = val1;
        }
        else {
            throw new Error("please put the number which should be positive");
        }
    }
    set price2(val2) {
        this.number2 = val2;
    }
    getResult(Auxiliary) {
        return `The result is : ${this.number1 * this.number2 + Auxiliary}`;
    }
}
__decorate([
    bridge
], Calculator.prototype, "FirstNewObj", void 0);
__decorate([
    bridge2
], Calculator.prototype, "price1", null);
__decorate([
    bridge3,
    __param(0, bridge4)
], Calculator.prototype, "getResult", null);
const b = new Calculator(2, 3);
const c = b.getResult(1);
console.log(c);
b.price1 = 5;
const d = b.getResult(1);
console.log(d);
//# sourceMappingURL=decorator.js.map