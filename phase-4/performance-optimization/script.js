// // // function debounce(fnc, delay){
// // //     let timer;
// // //     function debounced(...args){
// // //         clearTimeout(timer)
// // //         timer=setTimeout(()=>{
// // //             fnc(...args)

// // //         },delay)
// // // }
// // //          debounced.cancel=()=> clearInterval(timer)
// // //          return debounced
// // // }

// // // Asal masla

// // // Kuch events bohot tez aur baar baar fire hote hain: scroll, resize, mousemove, search box mein keyup. Agar har event par bhaari kaam (API call, calculation) chale to app slow ho jati hai. Debounce aur throttle dono is function ke chalne ki tadaad (frequency) kam karte hain, bas tareeqa alag hai.

// // // Debounce: "Ruko, jab user rukay tab chalo"

// // // Function tab chalta hai jab aakhri call ke baad delay tak koi nayi call na aaye. Har nayi call timer ko reset kar deti hai.

// // // Real life example: Lift ka darwaza. Jab tak log aate rahein, darwaza khula rehta hai aur timer reset hota rehta hai. Jab koi nahi aata to darwaza band hota hai.

// // // javascript
// // // function debounce(fn, delay) {
// // //   let timer;
// // //   return function (...args) {
// // //     clearTimeout(timer);
// // //     timer = setTimeout(() => fn.apply(this, args), delay);
// // //   };
// // // }

// // // Use: Search box. User "hello" type kar raha hai, har harf par API call nahi chahiye. Jab type karna rok de, tab ek call.

// // // Throttle: "Chaltay raho, lekin ek limit ke saath"

// // // Function har limit ms mein zyada se zyada ek baar chalta hai, chahe events kitne hi aayein. Beech ki calls ignore ho jati hain.

// // // Real life example: Machine gun ya bus. Bus har 10 minute mein ek chakkar lagati hai, chahe kitne bhi log stop par ho.

// // // javascript
// // // function throttle(fn, limit) {
// // //   let lastCall = 0;
// // //   return function (...args) {
// // //     const now = Date.now();
// // //     if (now - lastCall >= limit) {
// // //       lastCall = now;
// // //       fn.apply(this, args);
// // //     }
// // //   };
// // // }

// // // Use: Scroll event. User scroll kar raha hai, aur aap har 200ms mein ek baar position check karna chahte hain, na ke har pixel par.

// // // Farq ek example se

// // // Maan lo user 3 second tak lagatar scroll karta hai, aur delay/limit 1 second hai.

// // // 	Kitni baar chalega	Kab
// // // Debounce	1 baar	Scroll rukne ke 1 second baad
// // // Throttle	Taqreeban 3 baar	Scrolling ke dauran har 1 second mein
// // // Seedha muqabla
// // // 	Debounce	Throttle
// // // Idea	Shaant hone ka intezar	Rate limit
// // // Chalta kab hai	Events rukne ke baad	Events ke dauran, regular gap se
// // // Beech ki calls	Sab cancel	Limit ke andar wali ignore
// // // Best for	Search box, form validation, window resize ka final size	Scroll, mousemove, button spam rokna, drag
// // // Yaad rakhne ka asaan tareeqa
// // // Debounce = "Jab bolna band karo, tab jawab dunga."
// // // Throttle = "Main har 5 minute mein sirf ek baar jawab dunga, chahe tum kitna bhi bolo."
// // // Test karke dekhein
// // // javascript
// // // const onScroll = () => console.log("scroll handled");

// // // window.addEventListener("scroll", debounce(onScroll, 500));  // ruk kar chalega
// // // window.addEventListener("scroll", throttle(onScroll, 500));  // chalte hue chalega

// // // Dono ko alag alag chala kar scroll karein, console ka farq khud nazar aa jayega.

// // // Interview ke liye ek line

// // // "Debounce function ko tab chalata hai jab events ruk jayein, throttle function ko ek fixed interval mein zyada se zyada ek baar chalata hai."


// // function throttle(fnc, limit){
// //     let lastCall=0
// //     return function(...args){
// //         const now=Date.now()
// //         if (now-lastCall>=limit){
// //             lastCall=now
// //             fnc.apply(this, args)

// //         }

// //     }
// // }

// // lazy Loading via Intersection observer


// // code splitting

// const btn=document.querySelector("button")
// btn.addEventListener("click", async function(){
//     let {veryHeavy}=await import("./heavy.js")
//     veryHeavy()

// })


// memory leaks

// clearInterval, clearTimeout

function myFilter(arr,callback){
    let newArray=[]
    for (let i=0; i<arr.length;i++){
        if (callback(arr[i], i, arr)){
            newArray.push(arr[i])
        }
    }
    return newArray
}

let answerArr=myFilter([1,2,3,4], (num)=> num<5)