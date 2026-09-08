// Data Types

// 1) Primitives
// 2) Reference

// Primitives:
   // Jinko copy karna sa real copy milti hai

// Reference:
    // Jinko copy karna sa reference milta hai parent ka

//  Primitives -> {string, number, boolean, null, undefined, symbol, bigInt}

//  Reference -> {object, array, function}

let a=10;
let b=a;//  -> Real Copy(New memory address for b)
b=b+2; 

let c=[1,2,3];
let d=c;//  -> d reference to same memory location as c(change in one will change other as well)

d.pop();

// Primitives
    // String

// '' -> Single quotes
// "" -> Double quotes
// `` -> Backticks

    // number

// 12 is number and 12.3 is also a number in js

    //Boolean

// true | false


    // null

// jaan buj kar value null di hai kiyu ka programmer ko nahi pata abhi value kiya hai

// null khud sa assign karta hai programmer
let e=null;

    // undefined

// jab ap variable declare karda or initialize na kara variable ko to variable ki default value undefined hoti hai 

// undefined js engine assign karta hai

    // Symbol

// Unique Immutable Value mainly used as a special kind of object property key that won't clash with other keys

const _password=Symbol("uuid");
const obj={
    name: "raza",
    age:12,
    uuid:"001",
    [_password]:"002"
}

    // bigInt

// just add 'n' at last of a big a value

let bigNum=9007199254740991n;
let newValue=bigNum+4n; //Jis value ko add karna hai uske aga bhi n lagana hai

// Reference

//Agar = ka bad kahi pr bhi bracket dikh gaya tu samjh jayo reference type ka data type hai

// Topic 3  Dynamic Typing

let myString="raza";
myString=true;
myString=12;
myString=undefined;
myString=null
myString=12n;


// Topic 4 typeof() quirks

typeof NaN// number
typeof null// object
NaN===NaN// false
1=="1" // true

// Topic 5 Type Coercion

// It is a concept jisme aik data type automatically convert hojati hai

1+"5"// 15
"3"+2// 32 

// js will always convert number to string if one of the operand is a string and operator is +.

// Topic 6 falsey vs truthy values

// False values
 //{0,null,undefined,document.all,false, "", Nan}





