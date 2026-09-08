// Objects in js

// When To use objects

    // When you have to store all the information about a single entity unlike arrays which is used to store all the information

// Information of all the students in a class -> store them in array.

// Information about a particular student name Raza Ali -> store this information in object.

// Syntax of an object

const obj={
    name: "Raza Ali",
    age: 20,
    isMale: true,
    hobbies:[
        "cricket", "football", "chess"
    ],
    isWalking(){
        console.log("Yes")
    }
}

obj.isWalking();
obj.userName="hello world"
//console.log(obj)

let myName=obj.name
//console.log(typeof myName)

//syntax number 2 to access element from object

// console.log(obj["isMale"])
// console.log(obj.isMale)

// Agar ma chahta ho variable ka through access karna object ki kisi property key ko tu mujhe obj[] wala syntax use karna padega

let aa="name"

// obj.aa will not work because it literally checks for the word after .

console.log(obj[aa])  // this will work aa will resolve to "name"

// Nesting and deep access

const obj1={
    name: "Raza Ali",
    address:{
        city: "Lahore",
        province: "Punjab",
        location: {
            lng:77.4,
            latitude:80,
            perimeters:[
                1,2,3,4
            ]

        }
    }
}
//console.log(obj1.address.location.perimeters[3])

// Object Destructuring
let {lng,latitude}=obj1.address.location  // destructuring

// for-in

for (let key in obj1){
    console.log(key, obj1[key] )
}

// Object.keys(object)
const myKeys=Object.keys(obj1)

// Object.enteries(object)
const myValues=Object.entries(obj1)

// spread operator to copy objects

const obj2={price: Infinity,...obj1}

// Agar apka object ma aik or nested object hai tu obj1={...obj} aik kharab tareeqa hai kiyun ka dosra object reference karta hai nested object ko 

// Solution is deep copy

const obj3=JSON.parse(JSON.stringify(obj1))

// for array

// let myArray=[1,2,3,["hello"]]
// let arr2=[...myArray] // Spread Operator does'nt work for nested array and object

// the best way to copy array or object is deep clone

let arr=[1,2,["hello"]]
let arr2=JSON.parse(JSON.stringify(arr))

// Optional Chaining

obj1?.name  // if it exists you get the value else you don't get an error

// Computed properties` 

let role="admin"
const obj4={
    name:"ali",
    age:34,
    [role]:true
}