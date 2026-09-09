// // // // DOM kya hota hai? (Document Object Model)

// // // // Chalo simple tarike se samajhte hain.

// // // // Basic Idea

// // // // Jab tum ek HTML file browser mein open karte ho, toh browser us HTML ko padhta hai aur usse ek tree-like structure mein convert kar deta hai — jise hum DOM kehte hain. Ye ek JavaScript se access karne wala object hota hai jo poore page ko represent karta hai.

// // // // Simple words mein: DOM = HTML ka JavaScript version, jisse tum page ko dynamically change kar sakte ho.

// // // // Kyun important hai?

// // // // HTML file khud static hoti hai — ek baar load hone ke baad usmein kuch change nahi hota. Lekin DOM ke through, JavaScript us page ko live modify kar sakta hai — bina page reload kiye.

// // // // Jaise:

// // // // Button click hone par text change karna
// // // // Naya element add/delete karna
// // // // CSS style change karna
// // // // Form validation karna

// // // // Ye sab DOM ki wajah se possible hai.

// // // // Tree Structure

// // // // DOM ek tree jaisa structure hota hai. Example:

// // // // html
// // // // <html>
// // // //   <body>
// // // //     <h1>Hello</h1>
// // // //     <p>World</p>
// // // //   </body>
// // // // </html>

// // // // Iska DOM tree kuch aisa dikhega:

// // // // html
// // // //  └── body
// // // //       ├── h1 ("Hello")
// // // //       └── p ("World")

// // // // Har HTML tag ek "node" ban jata hai is tree mein — isliye ye "Document Object Model" kehlata hai, kyunki poora document ek object structure mein convert ho jata hai.

// // // // JavaScript se DOM access karna
// // // // javascript
// // // // // Ek element select karna
// // // // let heading = document.querySelector("h1");

// // // // // Uska text change karna
// // // // heading.textContent = "Namaste Duniya";

// // // // // Naya element banake add karna
// // // // let newPara = document.createElement("p");
// // // // newPara.textContent = "Ye naya paragraph hai";
// // // // document.body.appendChild(newPara);

// // // // // Style change karna
// // // // heading.style.color = "blue";

// // // // Yahan document object hi DOM ka entry point hai — isi se tum poore page ko access aur manipulate karte ho.

// // // // Common DOM Methods
// // // // Method	Kaam
// // // // getElementById()	ID se element dhundhna
// // // // querySelector()	CSS selector se element dhundhna
// // // // createElement()	Naya element banana
// // // // appendChild()	Element ko add karna
// // // // removeChild()	Element ko hatana
// // // // addEventListener()	Click, hover jaise events sunna
// // // // Ek chhoti si analogy

// // // // Socho HTML ek recipe/blueprint hai, aur DOM us blueprint se bana hua live building hai jise tum ghumkar dekh sakte ho, rooms add-remove kar sakte ho, rang badal sakte ho — sab kuch real-time mein, bina naya blueprint banaye.

// // // // Agar tumhe kisi specific part pe (jaise events, DOM traversal, ya kisi project mein use) deep dive chahiye, bata dena!

// // // // DOM Manipulation

// // // // HTML sa element select karna

// // //     //Legacy Code ma ya dikha ga

// // // // 1) getElementById -> old school (It was used in the past)
// // // // 2) getElementByClassName  -> old school (It was used in the past)

// // //     // Modern Way to select elements

// // // // 1) querySelector
// // // // 2) querySelectorAll

// // // // let h1=document.querySelector("h1")  // to select a single element
// // // // console.dir(h1)

// // // // // To access all h1 element
// // // // let allHeadings=document.querySelectorAll("h1")
// // // // console.dir(allHeadings)

// // // // Change the text of an heading

// // // let h1=document.querySelector("h1")
// // // console.dir(h1)

// // // h1.textContent="hello raza"

// // // // innerText vs innerHTML vs textContent — kab kya use karna hai

// // // // Ye teeno DOM properties text/content set ya get karne ke liye use hoti hain, but inka behavior alag hai. Chalo ek ek karke samajhte hain.

// // // // 1. textContent

// // // // Ye raw text deta/leta hai — HTML tags ko ignore karta hai (parse nahi karta), aur hidden elements ka text bhi include karta hai.

// // // // javascript
// // // // element.textContent = "<b>Hello</b>";
// // // // // Output screen pe: <b>Hello</b> (literal text, bold nahi hoga)

// // // // Kab use karo:

// // // // Jab tumhe sirf plain text set/get karna ho
// // // // Security ke liye best choice — user input ko safely display karne ke liye (XSS attack se bachne ke liye)
// // // // Performance mein sabse fast hai kyunki ye rendering/CSS ka kuch calculate nahi karta
// // // // javascript
// // // // // User ka comment display karna — SAFE
// // // // commentBox.textContent = userInput;
// // // // 2. innerText

// // // // Ye bhi text deta hai, lekin ye "visually rendered" text dikhata hai — CSS ko respect karta hai (jaise display: none wale elements ka text skip kar dega).

// // // // javascript
// // // // element.innerText = "Hello";
// // // // // CSS-aware — hidden text ko ignore karega getting time pe

// // // // Kab use karo:

// // // // Jab tumhe wahi text chahiye jo user ko actually dikh raha hai (visible text only)
// // // // Jaise agar tum "copy visible text" jaisa feature bana rahe ho

// // // // Downside:

// // // // Slow hai kyunki ye reflow trigger karta hai (layout recalculate karta hai, kyunki CSS check karna padta hai)
// // // // Cross-browser mein thoda inconsistent behavior de sakta hai
// // // // 3. innerHTML

// // // // Ye string ko HTML ki tarah parse karta hai — tags render honge.

// // // // javascript
// // // // element.innerHTML = "<b>Hello</b>";
// // // // // Output: **Hello** (bold text render hoga)

// // // // Kab use karo:

// // // // Jab tumhe actual HTML structure insert karni ho (jaise templates, dynamic cards, formatted content)
// // // // javascript
// // // // productCard.innerHTML = `
// // // //   <h3>${product.name}</h3>
// // // //   <p>Price: ₹${product.price}</p>
// // // // `;

// // // // ⚠️ Bada Warning:

// // // // Agar tum user input ko directly innerHTML mein daaloge, toh XSS (Cross-Site Scripting) attack ka khatra hai:
// // // // javascript
// // // // // DANGEROUS ❌
// // // // element.innerHTML = userInput; 
// // // // // Agar user ne <script>alert('hacked')</script> likha, toh execute ho sakta hai

// // // // Agar user input ke saath HTML chahiye hi hai, toh usse sanitize karo (jaise DOMPurify library use karke).

// // // // Quick Comparison Table
// // // // Feature	textContent	innerText	innerHTML
// // // // HTML tags parse karta hai?	❌ Nahi	❌ Nahi	✅ Haan
// // // // CSS/visibility aware?	❌ Nahi	✅ Haan	❌ Nahi
// // // // Performance	🚀 Fastest	🐢 Slow (reflow)	⚡ Medium
// // // // Security	✅ Safe	✅ Safe	⚠️ XSS risk
// // // // Use case	Plain text set/get	Visible text	HTML structure insert
// // // // Simple Rule of Thumb
// // // // User input display karna hai? → textContent
// // // // Sirf visible text chahiye (jo screen pe dikh raha hai)? → innerText
// // // // HTML structure/tags insert karne hain (trusted content)? → innerHTML

// // // // Bhai, agar security ka doubt ho toh hamesha textContent safe side hai. innerHTML tabhi use karo jab content trusted ho (khud ka banaya hua ya sanitized).

// // // // setAttribute, getAttribute, removeAttribute

// // // let a=document.querySelector('a')
// // // console.dir(a)

// // // a.textContent="Google"
// // // let href=a.getAttribute("href")
// // // a.setAttribute("href","https://www.youtube.com")

// // // //-----------------------------------------------

// // // let img=document.querySelector("img")
// // // img.setAttribute("src","https://images.unsplash.com/photo-1788336816155-fef8e52e03fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

// // // img.setAttribute("alt","broken image")

// // // // -----------------------------------------------

// // // let video=document.querySelector("video")
// // // console.dir(video)

// // // // Dynamic DOM manipulation

// // // // Create Element
// // // let myh1=document.createElement("h1")
// // // myh1.textContent="Hello bhaiya"
// // // document.body.append(myh1)
// // // myh1.style.color="red"

// // let mainHeading=document.createElement("h1")
// // mainHeading.textContent="Hello Dosto"
// // document.body.prepend(mainHeading)

// // mainHeading.innerHTML="Hello <span>Dosto</span>"
// // // remove Element 

// // let span=document.querySelector("h1 span")
// // span.remove()

// // // style vs classlist
// let h1=document.createElement("h1")
// h1.textContent="hello world"
// h1.style.color="blue"
// h1.style.backgroundColor="green"

// document.body.prepend(h1)

// //classList

// h1.classList.add("heading")

let h1=document.querySelector("#main")
h1.textContent="Welcome to shariyans"

let liList=document.querySelectorAll("li")
liList.forEach(val=>console.log(val.textContent))

document.querySelector("ul").append(document.createElement("li").textContent="hello6")

// ----------------------------------------------
let lis=document.querySelectorAll("li")
lis.forEach(element=> element.className="highlight")