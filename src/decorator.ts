//the order of decorator execution. = it is a buttom up order. for example,

function order1(a: string) {
  console.log("How about this");
  return function(_: Function) {
    //the underbar means "hey, I know I need to put a parameter but please, ignore it"
    console.log(a);
  };
}

function order2(b: string) {
  console.log("How about that");
  return function(_: Function) {
    console.log(b);
  };
}

@order1("would be SECOND")
@order2("would be FIRST") // As I expected, the console.log is run in the order of buttom-top. But beware of this that this rule is only applied to the factory not the decorator order itself. For example, If i put the console.log outside the factor bracket, then I could see that order1 is executed first.
class WhatFirst {
  constructor() {}
}
////////////////////////////////////////////////////
//the position of deocrator = I don't need to add the "@" to the top of class, in other words, not need to connect decorator directly to classes but I can do it to other parts at my disposal.

function bridge(target: any, propertyName: any) {
  console.log("property decorator");
  console.log(target, propertyName); //prototype object's property name : FirstNewObj {getResult,set price1,set price2....}
}

function bridge2(target: any, name: string, descripter: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target); // the same thing of property decorator's prototype object{getResult, set price1 ....}
  console.log(name); // call the name of setter
  console.log(descripter); // {getter:undefined,enumerable:false, configurable:true, set: f}
}

function bridge3(target: any, name: string, descripter: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target); //the same prototype object
  console.log(name); //the method name "getResult"
  console.log(descripter); //unlike setter's decorator, it doesn't have, needless to say, get property because it is not setter or getter. {writable:true, enumerable:false, configurable:true value:f}
}

function bridge4(target: any, name: string, position: number) {
  console.log("parameter decorator");
  console.log(target); //the same prototype object
  console.log(name); //the name of method.
  console.log(position); // parameter's first type. and the result is the first argument "0"
}

class Calculator {
  @bridge
  FirstNewObj = ""; //@bridge would use the key name of this property which is "located right behind itself" as the name of prototype object's property name which constains the properties below like set price1, set price2....

  @bridge2
  set price1(val1: number) {
    if (val1 > 0) {
      this.number1 = val1;
    } else {
      //It would be better for me to use else not to make any confusion.
      throw new Error("please put the number which should be positive");
    }
  }

  set price2(val2: number) {
    this.number2 = val2;
  }

  constructor(private number1: number, private number2: number) {}

  @bridge3
  getResult(@bridge4 Auxiliary: number) {
    return `The result is : ${this.number1 * this.number2 + Auxiliary}`;
  }
}

const b = new Calculator(2, 3);
const c = b.getResult(1);
console.log(c); //7
b.price1 = 5;
const d = b.getResult(1);
console.log(d); //16
////////////////////////////////////////////////////////////////////////////////////////
