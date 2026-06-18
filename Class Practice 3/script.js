console.log("Data types in Javascript.");

console.log("There are 7 Primitive data types: ");
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. BigInt
// 7. Symbol

let String_1 = "Hello World!";
let Number_1 = 345;
let Boolean_1 = true;
let Boolean_2 = false;
let Undefined;
let Null = null;
let BigInt_1 = 23240936518580767521184767688965467n;
let BigInt_2 = BigInt(232409365185);
let Symbol_1 = Symbol("Hellow World!");

console.log("The type of String_1: " + String_1 + " is " + typeof(String_1))
console.log("The type of Number: " + Number_1 + " is " + typeof(Number_1))
console.log("The type of Boolean_1: " + Boolean_1 + " is " + typeof(Boolean_1))
console.log("The type of Boolean_2: " + Boolean_2 + " is " + typeof(Boolean_2))
console.log("The type of Undefined: " + Undefined + " is " + typeof(Undefined))
console.log("The type of Null: " + Null + " is " + typeof(Null))
console.log("The type of BigInt_1: " + BigInt_1 + " is " + typeof(BigInt_1))
console.log("The type of BigInt_2: " + BigInt_2 + " is " + typeof(BigInt_2))
// console.log("The type of Symbol_1: " + Symbol_1 + " is " + typeof(Symbol_1))  // wrong way
// Corrected syntax
console.log("The type of Symbol_1: " + Symbol_1.toString() + " is " + typeof(Symbol_1));
