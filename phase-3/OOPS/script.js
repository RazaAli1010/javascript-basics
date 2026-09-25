// Constructor function hai kya

// Ye ek normal JavaScript function hi hoti hai, bas use karte hain new keyword ke saath, taaki objects bana sakein. Naming convention ye hai ki naam Capital letter se start hota hai (jaise Person), taaki pata chale ye ek constructor hai, normal function nahi.

// js
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("Ali", 25);
// console.log(person1.name); // Ali
// console.log(person1.age);  // 25
// new keyword karta kya hai

// Jab tum new Person(...) likhte ho, JS engine chaar kaam karta hai automatically:

// Ek naya empty object banta hai {}
// Uss object ka prototype, Person.prototype se link ho jata hai
// Function ke andar this ab uss naye object ko point karta hai
// Agar function khud kuch object return nahi kar raha, to wo naya object automatically return ho jata hai

// Isliye this.name = name likhne se naye object pe property set ho jati hai.

// Methods — prototype pe daalo, constructor ke andar nahi

// Agar method ko seedha constructor ke andar define karoge:

// js
// function Person(name) {
//   this.name = name;
//   this.greet = function() {   // ❌ har object ke liye naya function banega
//     console.log(`Hi, main ${this.name} hoon`);
//   };
// }

// To har naye object ke liye ek alag greet function memory mein banega — waste hai. Better ye hai:

// js
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {   // ✅ sab objects ye ek hi function share karenge
//   console.log(`Hi, main ${this.name} hoon`);
// };

// const p1 = new Person("Ali");
// const p2 = new Person("Sara");
// p1.greet(); // Hi, main Ali hoon
// Common mistake — new bhool jana
// js
// const p3 = Person("Zara"); // new ke bina
// console.log(p3); // undefined ❌

// new ke bina this galat cheez ko point kar sakta hai (non-strict mode mein global object, strict mode mein error/undefined), aur object properly nahi banta. Isliye bugs aa sakte hain.

// ES6 class — ye bas sugar hai

// Modern JS mein wahi cheez class syntax se likhte hain, andar se same constructor-function logic hi chal raha hota hai:

// js
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hi, main ${this.name} hoon`);
//   }
// }

// Behavior bilkul same hai — bas likhne ka tareeka clean hai.

// Koi specific part pe aur deep jaana hai — jaise prototype chain, instanceof, ya class inheritance?

// bada bhaiya ya prototype kiya hai?

// Chalo bhai, prototype samajhte hain — ye thoda abstract lagta hai shuru mein, but concept simple hai.

// Prototype hai kya

// Har JavaScript function (aur object) ke saath ek hidden object attach hota hai jise prototype kehte hain. Ye ek "backup object" jaisa hai — jab tum kisi object pe koi property ya method access karte ho jo uss object mein khud nahi hai, JS uske prototype mein jaake dhoondta hai.

// js
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log(`Hi, main ${this.name} hoon`);
// };

// const p1 = new Person("Ali");
// p1.greet(); // "Hi, main Ali hoon"

// Yahan p1 ke paas khud greet naam ki koi property nahi hai. Par jab tum p1.greet() call karte ho, JS pehle p1 mein dhoondta hai, nahi milta to Person.prototype mein jaake dhoondta hai — wahan mil jaata hai, to wahi use ho jata hai.

// Ye zaroori kyun hai

// Memory bachane ke liye. Agar tum 1000 Person objects banao, aur greet function har object ke andar (constructor mein this.greet = ...) define karo, to 1000 alag-alag copies banengi.

// Lekin prototype pe daalne se sirf ek hi copy banti hai, aur saare objects usi ek function ko share karte hain.

// js
// const p2 = new Person("Sara");
// console.log(p1.greet === p2.greet); // true — same function hai
// Prototype chain

// Ye ek zanjeer (chain) ki tarah kaam karta hai — agar prototype mein bhi na mile, to JS uske bhi prototype mein jaata hai, aur ye chalta rehta hai jab tak null na aa jaye (jo chain ka end hota hai).

// js
// p1 -> Person.prototype -> Object.prototype -> null

// Isi wajah se har object pe toString(), hasOwnProperty() jaise methods kaam karte hain — wo Object.prototype se aate hain, chain ke through.

// Check karne ka tareeka
// js
// console.log(p1.__proto__ === Person.prototype); // true
// console.log(Object.getPrototypeOf(p1) === Person.prototype); // true (recommended way)

// console.log(p1.hasOwnProperty("name"));   // true  (khud ke paas hai)
// console.log(p1.hasOwnProperty("greet"));  // false (prototype se aa raha hai)
// Ek line mein yaad rakhna ho to

// Prototype = wo jagah jahan shared methods rakhe jaate hain, taaki har object apni alag copy na banaye.

// Bhaiya, __proto__ aur prototype ka farak clear karna hai, ya Object.create() bhi dikhana hai?

// Object.prototype kiya hai?

// Bhai, ye ek achha follow-up sawaal hai — chalo isko clear karte hain.

// Object.prototype hai kya

// Ye JavaScript ki prototype chain ka sabse aakhri (top-most) link hai — matlab sabka baap 😄. Har object jo bhi JS mein banta hai (chahe object literal ho, array ho, function ho, ya koi custom class ka instance ho), uski chain ghoomte-ghoomte Object.prototype tak pahunchti hai.

// js
// const obj = {};
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
// Isme hota kya hai

// Object.prototype mein wo saare common methods hote hain jo tumne shayad already use kiye honge bina soche ki ye aa kahan se rahe hain:

// js
// Object.prototype.hasOwnProperty
// Object.prototype.toString
// Object.prototype.valueOf
// Object.prototype.isPrototypeOf

// Isliye ye sab kaam karte hain, chahe object kaisa bhi ho:

// js
// const p1 = { name: "Ali" };
// console.log(p1.hasOwnProperty("name")); // true
// console.log(p1.toString());             // "[object Object]"

// p1 ke paas khud ye methods nahi hain — JS chain follow karta hai: p1 → Object.prototype, aur wahan mil jaate hain.

// Poori chain dobara dekho

// Pichle example ka Person wapas lete hain:

// js
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function() { console.log("hi"); };

// const p1 = new Person("Ali");

// Chain aisi banti hai:

// p1  →  Person.prototype  →  Object.prototype  →  null
// p1 mein khud sirf name hai
// greet milta hai Person.prototype se
// hasOwnProperty, toString jaise methods milte hain Object.prototype se
// Uske aage null — chain khatam, ab JS aur uपर nahi dhoondega
// Ek chota sa trap

// Object.prototype ka khud ka prototype null hota hai:

// js
// console.log(Object.getPrototypeOf(Object.prototype)); // null

// Isliye chain kahin infinite loop mein nahi jaati — ek fixed endpoint hai.

// Yaad rakhne wali line


// Object.prototype = wo base object jahan se saare objects (directly ya chain ke through) apne common methods — toString, hasOwnProperty waghera — inherit karte hain.

function CreateCar(name, model, brand, engine, color){
    this.name=name
    this.model=model
    this.brand=brand
    this.engine=engine
    this.color=color
}

CreateCar.prototype.start=function(){
    console.log(this.brand)
}

let car1=new CreateCar("city","2022","Honda","V8","White")

// ES6 sugar coating of constructor function

class Person{
    constructor(name, age, height, weight, color){
        this.name=name
        this.age=age
        this.height=height
        this.weight=weight
        this.color=color
    }

    greet(msg){
        let h1=document.createElement("h1")
        h1.textContent=msg
        h1.style.color=this.color
        document.body.append(h1)

        
    }
}

let pr1=new Person("Raza Ali", 23, 1.2, 65, "red")

let pr2=new Person("Sami", 23, 1.4, 70, "white")

// Inheritance

class User{
    constructor(name, userName, email){
        this.name=name
        this.userName=userName
        this.email=email
        this.role="user"
    }
    write(msg){
        let h1=document.createElement("h1")
        h1.textContent=`${this.name} ${msg}`
        h1.style.color="red"
        document.body.append(h1)
    }
}

class Admin extends User{
    constructor(name, userName, email, rank){
        super(name, userName, email)
        this.rank=rank
        this.role="Admin"
    }
    remove(user){
        document.querySelectorAll("h1").forEach((elem)=>{
            if (elem.textContent.startsWith(user.name)){
                elem.classList.add("void")
            }
        })

    }
}
let user1=new User("raza","raza1010","ra@gmail.com")
let user2=new User("ali","raza1010","ra@gmail.com")

let admin1=new Admin("toqueer","ttttt","toqueera@admin.com",1)