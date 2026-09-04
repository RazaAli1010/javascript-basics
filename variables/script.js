// var (old ES5)
var b=2;
var b=5;

//New and prefered way for declaring variables
let userName;
userName="Raza Ali"

let ch='c';

// When you know that the value will not change after declaration

const age=22;
console.log(age,"hello world",userName, typeof(age), typeof(userName), typeof(ch))

// Temporal Dead Zone

//temporal dead zone does'nt exist in var

//console.log(e); // e is not defined

//console.log(d);// cannot access d before initialization
//let d=2;

//The area or lines of code above an initialized variable is temporal dead zone for that variable


// Hoisting Per Data Type

// A variable breaks into two parts in js, declaration and initialization and declaration part goes to the top of the program.

var raza=12;

//Behind the scene
var raza=undefined; //Declaration part moves on the top of the program that's why compiler know that a variable named raza is exist but it does'nt let access the value in temporal dead zone

//Temporal Dead Zone for raza

raza=12