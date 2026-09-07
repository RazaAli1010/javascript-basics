// Arrays

// Array Declaration/ Creation

// Method 1

let arr=[1,2,3]

// Method 2

let myArr=new Array(1,2,3)
console.log(myArr)

// Access a particular element of an array

console.log(arr[0])

// Modify array element

arr[0]=3
console.log(arr)

// Array Methods

    // array.push(val)
arr.push(5)
console.log(arr)

    // array.pop()

arr.pop() // removes from the last just like stack LIFO
console.log(arr)

    // array.shift()

arr.shift()  // removes from the start in order to get queue FIFO
console.log(arr)

    // array.unshift(val)

arr.unshift(500) // adds an element in the start of an array
console.log(arr)

    // array.splice(index, count)

arr.splice(0,1) // remove the number of values in count from the start of index
console.log(arr)

    // array.slice(start, end)

let newArr=arr.slice(0,2) // returns a copy of array from starting index to ending index -1 end is exclusive
console.log(newArr)

    // array.reverse()

arr.reverse() // reverse the array
console.log(arr)

    // array.sort(function(a,b){
    //   return a-b -> ascending return b-a descending
    //})

let ascendArr=arr.sort(function(a,b){
    return a-b
})
console.log(ascendArr)

// forEach loop

arr.forEach(function(val){
    console.log(val+5)
})

// Map Function

// map() Kab Use Karo?

// map() tab use karo jab tumhe ek array ke har item ko transform (badal) karke ek naya array banana ho — jiski length original array ke barabar ho.

// Simple rule: "Har item ko kuch bana ke naya array chahiye" → map() use karo.

const numbers=[1,2,3,4,5]

const doubled=numbers.map((val)=> val*2)
console.log(doubled)

// Filter Function

// filter() Kab Use Karo?

// filter() tab use karo jab tumhe array mein se kuch specific items chunne hon, based on ek condition (true/false) — aur baaki items hata dene hon.

// Simple rule: "Mujhe sirf wo items chahiye jo ek condition pass karte hain" → filter() use karo.

const evenNumbers=numbers.filter((val)=> val%2===0) // aik condition pass karni hai
console.log(evenNumbers)

// reduce function

// reduce() Kab Use Karo?

// reduce() tab use karo jab tumhe pure array ko combine karke ek single value banani ho — chahe wo number ho, string ho, object ho, ya koi bhi ek result.

// Simple rule: "Mujhe poore array ka ek final result chahiye" → reduce() use karo.

const product=numbers.reduce((accumlater, val)=>accumlater*val,1)
console.log(product)

const minVal=numbers.reduce((accum, val)=> (val>accum?accum:val))
console.log(minVal)

// convert array into object
const users=[
    {id:1,name:"raza"},
    {id:2,name:"sami"}
]
const userObj=users.reduce((accum, user)=>{
    accum[user.id]=user.name
    return accum
},{})

console.log(userObj)

// find function

// find() Kab Use Karo?

// find() tab use karo jab tumhe array mein se sirf ek (pehla matching) item chahiye ho, based on ek condition — poora array nahi, sirf ek cheez.

// Simple rule: "Mujhe sirf wo pehla item chahiye jo condition pass kare" → find() use karo.

const value=numbers.find((val, index)=> index===2)
console.log(value)

// some function

// Chalo bhai, some() bhi bahut simple hai — ekdum seedha samjhte hain.

// some() Kab Use Karo?

// some() tab use karo jab tumhe sirf ye pata karna ho — "kya array mein kam se kam ek item hai jo condition pass karta hai?" — jawab hamesha true ya false milega.

// Simple rule: "Mujhe sirf haan/na (true/false) chahiye, item khud nahi" → some() use karo.

const isThree=numbers.some((val)=> val===3)
console.log(isThree)

// every function

// every() Kab Use Karo?

// every() tab use karo jab tumhe check karna ho — "kya array ke saare (har ek) items ek condition pass karte hain?" — jawab hamesha true ya false milega.

// Simple rule: "Mujhe check karna hai ki SAB items condition follow karte hain ya nahi" → every() use karo.

const isNumber=numbers.every((number)=> typeof number==="number")
console.log(isNumber)

// Destructuring

let [a,b,,c]=[1,2,3,4]

// Spread Operator ([...arr])

const arrrrr=[1,2,3,4,5,4,3,2,1]

const copiedArrr=[...arrrrr]

// How to add element at specific index

const age=[23,34,12,8]
age.splice(3,0,10)
console.log(age)

// Use Map to square each element

const val1=[1,2,3,4]

const squaredArray=val1.map((val)=> val**2)
console.log(squaredArray)

// Use Filter to keep numbers greater than 10

const val2=[100,5,2,30,15,40,2]
const greaterTen=val2.filter(val=> val>10)
console.log(greaterTen)

// Use reduce to find sum of the array
let val3=[1,2,3,-3,-2,-1]
const sumArray=val3.reduce((accum, val)=> accum+val,0)
console.log(sumArray)

// Merge two array
let arr1=[1,2]
let arr2=[3,4]
let arr3=[...arr1,...arr2]
console.log(arr3)