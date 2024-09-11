// JavaScript Variables
//var, let & const

//1. var
var message = "Hello";
// message = "Hello";
console.log(message);

// use _ and $ convention name
// typeof keyword to find the primitive type of a variable in JS

var _mesage = "HI";
console.log(_mesage);
var $message = "How are you?";
console.log($message);
var myName = "Andreea";
//with var you can redeclare the variable
var myName = "Alexandra";
console.log("Primitive type of this variable is:" + typeof myName);
var age = 30;
console.log(age);
//using var keyword you can override a value in JS
age = 31;
console.log("Primitive type of this variable is:" + typeof age);
console.log("My age now is: " + age);


//2. let -> good practice to use it more[used inside a for-each statement]
let value = "Hello students!"
console.log(value);
// with let you can't redeclare the variable
let value2 = "Hello students!", score=100;

let myValue = "Hi";
myValue = "Bye";
console.log(myValue);

//when a let variable is not assigned the primitive type will be undifined
let something;
console.log(something)


//3. constants: const [used more for constant values]
//when definening a constant variable you must also initialize it, once declared and initialized that value can't be changed!
const weekend = 2;
weekend = 3;
console.log(weekend);