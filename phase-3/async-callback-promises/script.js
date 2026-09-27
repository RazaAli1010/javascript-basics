// // Sync (Synchronous) — Line by line, ek ke baad ek

// JS normally top se bottom code chalata hai. Jab tak ek line khatam nahi hoti, agli line start nahi hoti. Isko bolte hain blocking — matlab code "ruk" jaata hai jab tak kaam complete na ho.

// javascript
// console.log("1");
// console.log("2");
// console.log("3");

// Output hamesha 1, 2, 3 hi aayega, order fix hai. Simple.

// Problem kahan aati hai? Jab koi kaam time leta hai — jaise file read karna, API call karna, database se data laana — to agar wo sync tarike se chale, to poora program freeze ho jaayega us kaam ke complete hone tak. User ko lagega app hang ho gaya.

// Async (Asynchronous) — Kaam side pe daal do, aage badho

// Async ka matlab hai: "ye time-lene-wala kaam background me chalne do, mujhe rukna nahi hai. Jab complete ho jaaye, mujhe bata dena."

// javascript
// console.log("1");

// setTimeout(() => {
//   console.log("2 (2 second baad aaya)");
// }, 2000);

// console.log("3");

// Output: 1, phir 3, phir 2 second baad 2.

// Dekha? JS ne setTimeout wale kaam ko side me rakh diya, aage ka code chalate rehta hai, aur jab timer poora hota hai tab wo callback chalta hai. Isi wajah se JS "single-threaded hoke bhi fast" lagta hai — kyunki heavy/slow kaam ko wo background me handle karwata hai (browser ya Node ke through) aur khud blocked nahi hota.

// Async likhne ke 3 tarike (evolution samjho)

// 1. Callback (purana tarika)

// javascript
// function getData(callback) {
//   setTimeout(() => {
//     callback("Data aa gaya");
//   }, 1000);
// }

// getData((result) => {
//   console.log(result);
// });

// Problem: bahut saare callbacks nest ho jaate hain → "callback hell" bolte hain isko.

// 2. Promise (thoda better)

// javascript
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data aa gaya");
//     }, 1000);
//   });
// }

// getData().then((result) => {
//   console.log(result);
// });

// Promise ek "wada" hai — ya to resolve (success) hoga ya reject (failure).

// 3. async/await (aajkal sabse popular, clean dikhta hai)

// javascript
// async function main() {
//   console.log("Shuru");
//   const result = await getData();  // yahan ruk jaayega, but poora app block nahi hoga
//   console.log(result);
//   console.log("Khatam");
// }

// main();

// await sirf us function ke andar rukta hai jab tak Promise resolve nahi hota — baaki poora program frozen nahi hota. Ye sirf syntax sugar hai Promise ke upar, andar se same cheez hai.

// Yaad rakhne wali cheez (event loop ka funda, ek line me)

// JS ek time pe ek hi kaam kar sakta hai (single thread), lekin async kaam (timer, API call, file read) ko wo background me bhej deta hai aur jab wo ready ho jaata hai, to call stack khali hone par wapas le aata hai. Isi mechanism ko Event Loop kehte hain.

// Promises

let pr=new Promise((resolve, reject)=>{
    let isValid=false
    setTimeout(()=>{
        if (isValid){
        resolve("true hu bhai")
    }
    else{
        reject("false hu bhai")
    }
    },1000)
})

// pr.then(function(val){
//     console.log("tum true tha is liye aga chala jayo")
// }).catch(function(val){
//     console.log("tum false hu")
// })

async function abcd(){
    try{
        let result=await pr
        console.log(result)
    }catch(error){
        console.log(error)
    }

}
