// // // // Event and Event Listener

// // // Event kya hota hai?

// // // Event matlab koi bhi action ya occurrence jo browser mein hota hai. Jaise:

// // // Button pe click karna
// // // Page load hona
// // // Mouse hover karna
// // // Keyboard pe kuch type karna
// // // Form submit karna
// // // Scroll karna

// // // Simple bhasha mein — jab bhi user ya browser kuch "karta" hai, ek event fire hoti hai.

// // // Event Listener kya hota hai?

// // // Event Listener ek aisa function hai jo wait karta hai kisi specific event ke hone ka. Jab wo event hoti hai, to listener andar wala code run kar deta hai.

// // // Socho isse ek chowkidar ki tarah — jab tak darwaaza (event) nahi khulta, wo kuch nahi karta. Jaise hi darwaaza khulta hai, wo apna kaam shuru kar deta hai.

// // // Syntax
// // // javascript
// // // element.addEventListener("eventType", function() {
// // //   // ye code chalega jab event trigger hogi
// // // });
// // // Example — Button Click
// // // javascript
// // // const button = document.querySelector("#myButton");

// // // button.addEventListener("click", function() {
// // //   console.log("Button dabaya gaya!");
// // // });

// // // Yahan:

// // // "click" → event ka naam
// // // function → jo click hone pe chalega (isse callback function bolte hain)
// // // Common Events
// // // Event	Kab fire hoti hai
// // // click	Click karne pe
// // // mouseover	Mouse le jaane pe
// // // keydown	Key press karne pe
// // // submit	Form submit karne pe
// // // load	Page load hone pe
// // // scroll	Scroll karne pe
// // // change	Input value change hone pe
// // // Event Object (bonus)

// // // Listener ke function mein ek event object bhi milta hai jisme us event ki details hoti hain:

// // // javascript
// // // button.addEventListener("click", function(e) {
// // //   console.log(e.target); // konsa element click hua
// // //   console.log(e.type);   // "click"
// // // });
// // // Ek chhota tip

// // // addEventListener use karo, onclick="..." HTML mein likhne se better hai — kyunki isse multiple listeners ek hi element pe laga sakte ho, aur HTML/JS separate rehta hai (clean code).

// // // let h1=document.querySelector("h1")
// // // h1.addEventListener("click",function(){
// // //     h1.classList.add("color")
// // // })
// // // function changeColor(){
// // //     h1.style.color="yellow"
// // //     h1.removeEventListener("mouseover",changeColor)
// // // }
// // // h1.addEventListener("mouseover",changeColor)

// // // function originalColor(){
// // //     h1.style.color=""
// // // }

// // // h1.addEventListener("mouseout",originalColor)

// // // // -------------------------------------------

// // // let inp=document.querySelector("#val")
// // // inp.addEventListener("input",function(e){
// // //     console.log(e.data)
// // //     }
// // // )

// // // document.querySelector("select").addEventListener("change",function(e){
// // //     document.querySelector("h1").textContent=`${e.target.value} Selected`
// // // })

// // let form=document.querySelector("form")
// // form.addEventListener("submit",function(e){
// //     e.preventDefault()
// // })

// // let inputs=document.querySelectorAll("form input")
// let mainDiv=document.querySelector(".main")

// window.addEventListener("mousemove",function(e){
//     mainDiv.style.top=e.clientY+"px"
//     mainDiv.style.left=e.clientX+"px"
    
    
    
// })

// // "e" -> Event Object

//     // Three main properties
//     // 1) target
//     // 2) type
//     // 3) preventDefault()


// // target

// // the element on which we are event listen kar raha hai

// // For example:
//     // h1.addEventListener -> h1 target hai

// // type

// // the event which we are listening on an element

// // For Example 
//     // btn.addEventListener("click") -> click is type

// // Event Capturing and Bubbling

// Jab bhi aap kisi HTML element pe click (ya koi bhi event) karte ho, wo event sirf usi element pe nahi hota — pura DOM tree involve hota hai. Iska ek fixed flow hota hai jisme 3 phases hote hain:

// Capturing Phase (Trickling) — Event window se start hoke neeche target element tak jaata hai
// Target Phase — Event apne actual target element pe pahunchta hai
// Bubbling Phase — Event wapas target se upar window tak bubble karta hai

// event.stopPropagation()

// e.stopPropagation() ka matlab hai — "aage mat bhejo, yahin rok do".

// Apne wahi analogy mein socho: Beta chillaya, awaaz Papa tak pahunchi. Ab agar Papa bole "bas, yahin ruk jao, Dada ko mat batao" — to Dada tak awaaz kabhi nahi pahunchegi.

// Ek chhoti si cousin bhi hai — e.stopImmediatePropagation(). Ye same kaam karta hai (aage rokta hai) plus agar usi element pe multiple listeners lage ho, to unme se baaki listeners bhi nahi chalenge. Normal stopPropagation() sirf aage jaane se rokta hai, lekin same element ke doosre listeners chal jaate hain.

// Capturing and bubbling

/*
a.addEventListener("click",function(){
},true)

// by default capturing false hoti hai or bubbling true hoti hai

// pehle hemesha capturing hoti hai

*/

let inp=document.querySelector("input")
let span=document.querySelector("span")

inp.addEventListener("input",function(){
    let left=20-inp.value.length
    span.textContent=left
    if (left<0){
        span.style.color="red"
    }
    else{
        span.style.color=""
    }
})