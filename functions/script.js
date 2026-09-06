                        // Function in JavaScript

// what is function?
    
    //Function let's us control when to do a specific thing such as the code inside the function will only execute if it is called.

    // The second use case of function is code reuseability. One function can be used anywhere in the function. Created once and can be used anywhere.

// Syntax of Function in js

function myName(){// Function Declarations
    console.log("Raza Ali")
}
//myName()

// Another way to write a function

let myAge=function(){// Function Expression
    console.log(23)
}
//myAge()

// Arrow Function

const myUni=()=>{
    console.log("PUCIT")
}
//myUni()

// Parameter vs Arguement

function add(num1,num2){// -> num1 and num2 are parameter of function add
     return num1+num2
}
//console.log(add(2,3))// -> 2 and 3 are arguements to this function

// Default, rest and spread parameters

function add(num1=0,num2=0){ // num1 and num2 are default parameters
     return num1+num2
}
//console.log(add(2,2))

// Rest Parameter (just like positional arguements in python)
function values(...val){ // ...val is rest parameter it can take any number of arguements and store them in an array and ... is rest operator.
    console.log(val)
}
//values(1,2,3,4,5,6,7,8,9)

// Return Statement and Early Statement

function abcd(){
    return 12
}

//let val=abcd() // -> function abcd will return 12 here and store in val

// First Class Functions

    // Functions can be treated as values in js
    // For Example we can pass a function as arguement to another function, and we can store them in variables

function abcde(val){
    val()
}

// abcde(function(){
//     console.log("I am from that function which is passed as arguement")
// })


// HIGHER ORDER FUNCTION

    // A function which either takes another function in parameter 
                      //OR
    // return another function

// Case 1

function abrakadabra(val){ // taking function as a parameter so it is an higher order function
    
}

abrakadabra(function(){

})

// Case 2

function r(){ // returns another function
    return function(){
        console.log("hyehuhhu")
    }
}

//r()()

// Pure vs Impure Function

    //Pure Function
    // Aisa function jo kisi bhi output state ko modify na kara wo pure function hota hai

let driver="harsh"

function printDriver(){ // it is not changing value of global scoped variable driver that's why it is a pure function
    console.log(driver)
}

    // Impure Function
    // Aisa function jo kisi outside state(global variable, DOM, database, file and console) ko modify karde 

let registration=true;
function impureRegistration(){// since it is changing the value of registration that's why it is impure function
    registration=false
    console.log(registration)
}

// Closure in js

    // Closure ek aisa function hota hai jo apne outer function ke variables ko yaad rakhta hai, chahe outer function ka execution khatam ho chuka ho.

function outer(){
    let balance=100
    return {
        getBalance: function(){
            return balance
        },
        addBalance:function(val){
            balance+=val
    
        }
    }
}

// const myWallet=outer()
// console.log(myWallet.getBalance())
// myWallet.addBalance(20)
// console.log(myWallet.getBalance())


// Immediately Invoked function expression (IIFE)

    // Ek aisa function jo banate hi turant khud chal jata hai — usko alag se call karne ki zarurat nahi padti.

(function(){
    console.log("hello world")
})()

// 3. Function Declaration Mein Hoisting

// Function declaration poori tarah hoist hoti hai — matlab naam aur poora function body dono upar chale jate hain.

// javascript
// sayHi(); // ✅ "Hi bhai!" -- ye kaam kar jayega!

// function sayHi() {
//   console.log("Hi bhai!");
// }

// Ye chal jayega, kyunki function declaration puri ki puri (with its body) hoist ho jati hai — isliye tum ise call karne se pehle bhi likh sakte ho, koi problem nahi.

// 4. Function Expression Mein Hoisting

// Function expression = jab tum function ko variable mein store karte ho:

// javascript
// const greet = function () {
//   console.log("Hello!");
// };

// Yahan hoisting variable ke rule follow karti hai (kyunki ye asal mein ek variable hai jisme function value store hai), function ke rule nahi.

// var Ke Saath Function Expression
// javascript
// sayHello(); // ❌ TypeError: sayHello is not a function

// var sayHello = function () {
//   console.log("Hello!");
// };

// Yahan var sayHello declaration to hoist ho gayi (jaisa var karta hai), lekin uski value abhi undefined thi us waqt (function assign nahi hua tha). Isliye sayHello() call karna aisa hai jaise undefined() call kar rahe ho — error aayega.

// let/const Ke Saath Function Expression
// javascript
// sayHello(); // ❌ ReferenceError: Cannot access 'sayHello' before initialization

// const sayHello = function () {
//   console.log("Hello!");
// };

// Yahan TDZ ki wajah se error aayega — kyunki const abhi apni "locked zone" mein hai.

// Sabse Clear Comparison Table
// Type	Declaration Se Pehle Call Karo To?
// function greet() {} (Declaration)	✅ Kaam karega — poora function hoist hota hai
// var greet = function () {} (Expression)	❌ TypeError — value abhi undefined hai
// let greet = function () {} (Expression)	❌ ReferenceError — TDZ ki wajah se
// const greet = function () {} (Expression)	❌ ReferenceError — TDZ ki wajah se
// Arrow Function Ka Hoisting

// Arrow function hamesha ek expression hota hai (kabhi declaration nahi hota), isliye ye bhi variable ke rule follow karta hai:

// javascript
// sayHi(); // ❌ ReferenceError (agar const/let use kiya)

// const sayHi = () => {
//   console.log("Hi!");
// };
// Practical Takeaway

// Isi wajah se best practice yahi hai ki:

// Function declarations upar likho, ya jahan bhi likho, use zaroorat se pehle bhi call kar sakte ho
// Function expressions / arrow functions hamesha unki declaration line ke baad hi use karo — pehle mat karo, warna error aayega
// Ek Line Mein Sab Yaad Rakho

// Hoisting = declarations ko engine memory mein upar utha leta hai code chalne se pehle.
// TDZ = let/const ke liye wo waqt jab tak unki asli line na aaye — is beech access karna error deta hai.
// Function declaration poori hoist hoti hai (turant use kar sakte ho), lekin function expression/arrow function variable ke rule follow karti hai — declaration se pehle use karna crash karayega.

// Bahut solid topics cover kiye tumne bhai — hoisting aur TDZ interview mein bahut poochhe jaate hain, ab tumhara base bahut strong hai! 💪

function discountCalculator(percentage){
    return function(value){
        return value-value*(percentage/100)
    }
}

const myDiscount=discountCalculator(20)
console.log(myDiscount(100))