// // // Execution Context kya hota hai?

// // // Execution context ek environment (dabba) hai jisme JS ka code run hota hai. Jab bhi JS code chalata hai, wo pehle ek execution context banata hai, jisme ye sab hota hai:

// // // Variables aur functions (memory)
// // // Scope chain (bahar ke scope ka reference)
// // // this ki value
// // // Kitne type ke hote hain?
// // // Global Execution Context (GEC): Program start hote hi banta hai, sirf ek hota hai. Browser me this = window.
// // // Function Execution Context (FEC): Har baar jab function call hota hai, naya context banta hai.
// // // Eval context: eval() ke andar ka code (ise practically use nahi karte).
// // // Do phases hote hain

// // // Har execution context 2 phases me kaam karta hai:

// // // 1. Memory Creation Phase (Creation phase)

// // // Code run hone se pehle JS poora code scan karta hai.
// // // var variables ko undefined mil jata hai.
// // // Functions poori tarah memory me store ho jaate hain.
// // // let / const memory me aate hain, par Temporal Dead Zone (TDZ) me rehte hain, yaani declaration se pehle access karoge to error.

// // // 2. Code Execution Phase

// // // Ab line by line code chalta hai.
// // // Values assign hoti hain, functions call hote hain.
// // // Example se samjho
// // // javascript
// // // var n = 2;

// // // function square(num) {
// // //   var ans = num * num;
// // //   return ans;
// // // }

// // // var sq1 = square(n);
// // // var sq2 = square(4);

// // // Global context, memory phase:

// // // n    : undefined
// // // square : function code
// // // sq1  : undefined
// // // sq2  : undefined

// // // Execution phase:

// // // n = 2 assign hota hai.
// // // square sirf declaration hai, skip.
// // // square(n) call hote hi naya function execution context banta hai:
// // // Memory phase: num: undefined, ans: undefined
// // // Execution phase: num = 2, ans = 4, phir return 4
// // // Return hote hi ye context delete ho jata hai, aur sq1 = 4.
// // // Same process square(4) ke liye chalta hai.
// // // Call Stack

// // // JS single-threaded hai, to saare execution contexts ek stack me manage hote hain:

// // // |  square(4) FEC  |  ← top (abhi chal raha hai)
// // // |-----------------|
// // // |  Global EC      |  ← bottom (hamesha rehta hai)
// // // Function call hua → context stack me push
// // // Function return hua → context stack se pop
// // // Program khatam hone par Global context bhi pop ho jata hai.
// // // Hoisting isi ki wajah se hota hai
// // // javascript
// // // console.log(x); // undefined (error nahi!)
// // // greet();        // "Hello" (kaam karega)

// // // var x = 5;
// // // function greet() {
// // //   console.log("Hello");
// // // }

// // // Memory phase me x ko undefined mil chuka tha aur greet ka poora code store ho chuka tha. Isliye execution se pehle bhi dono access ho gaye. Isi ko hoisting kehte hain, koi magic nahi, bas creation phase ka side effect hai.

// // // Lekin:

// // // javascript
// // // console.log(y); // ReferenceError (TDZ)
// // // let y = 10;
// // // Scope Chain (Lexical Environment)

// // // Har execution context ke paas apne outer context ka reference hota hai. Agar variable current context me nahi mila, to JS bahar ke context me dhoondhta hai, phir usse bahar, jab tak global tak na pahunch jaye. Ye chain hi scope chain kehlati hai, aur closures isi par based hain.

// // // Quick Summary
// // // Cheez	Matlab
// // // Execution Context	Code chalne ka environment
// // // Phase 1	Memory creation (hoisting yahin hota hai)
// // // Phase 2	Code execution (line by line)
// // // Call Stack	Contexts ko manage karne wali stack
// // // Global EC	Sabse pehle banta hai, sabse neeche rehta hai
// // // Function EC	Har function call par naya banta hai

// // // Agar aap chaho to agla topic closures, hoisting ke tricky cases, ya this keyword le sakte hain, ye teeno execution context se hi directly jude hain. Batao kaunsa lena hai?

// // // global ec of function ec kiya kaam karta hai or dono ma faraq batayo

// // // Global aur local variables ka farq samjhana.
// // // Global Execution Context (GEC)

// // // Kaam: Ye poore program ka base environment hai. Jaise hi JS file run hoti hai, engine sabse pehle isay banata hai.

// // // Global variables aur functions yahan store hote hain.
// // // Browser me ek global object (window) banta hai, aur this usi ko point karta hai.
// // // Program me sirf ek GEC hota hai.
// // // Ye call stack ke sabse neeche rehta hai aur program khatam hone par hi hatta hai.
// // // Function Execution Context (FEC)

// // // Kaam: Jab bhi koi function call hota hai, uske liye ek alag chhota environment banta hai. Function ke apne variables, parameters aur arguments isi me rehte hain.

// // // Function sirf define karne se FEC nahi banta, call karne par banta hai.
// // // Har call par naya context banta hai (10 baar call = 10 alag contexts).
// // // Function return hote hi ye context delete ho jata hai.
// // // Is me arguments object hota hai, aur outer scope ka reference bhi.
// // // Dono me Farq
// // // Point	Global EC	Function EC
// // // Kab banta hai	Program start hote hi	Function call hone par
// // // Kitne hote hain	Sirf 1	Jitni baar function call, utne
// // // Kab khatam hota hai	Program end par	Function return par
// // // Call stack me position	Sabse neeche	Uske upar (push/pop hota rehta hai)
// // // this	Global object (window)	Call karne ke tareeqe par depend karta hai
// // // arguments object	Nahi hota	Hota hai (arrow function ko chhor kar)
// // // Scope	Global scope	Local (function) scope
// // // Outer reference	Koi nahi (null)	Parent context ka reference (scope chain)
// // // Chhota Example
// // // javascript
// // // var name = "Ali";        // Global EC me

// // // function greet(city) {
// // //   var msg = "Hello";     // Function EC me
// // //   console.log(msg, name, city);
// // // }

// // // greet("Lahore");         // yahan naya FEC banta hai
// // // console.log(msg);        // ReferenceError, msg sirf FEC me tha, wo delete ho chuka

// // // Kya hua:

// // // GEC bana: name, greet memory me aaye.
// // // greet("Lahore") call hua, to naya FEC bana aur stack ke upar push hua.
// // // FEC me msg aur city mile. name local me nahi mila, to scope chain se GEC me se mil gaya.
// // // Function khatam, FEC pop ho gaya, msg bhi gaya. Isliye bahar se msg access nahi hota.
// // // Ek Line me

// // // GEC poore program ka base environment hai jo hamesha rehta hai. FEC har function call ka temporary environment hai jo kaam khatam hote hi khatam ho jata hai.

// // // Lexical vs Dynamic scoping

// // Scope kya hota hai?

// // Scope ka matlab hai ke koi variable kahan se kahan tak accessible hai. Sawal ye hai ke jab function ke andar koi variable local me na mile, to JS kahan dhoondhe? Is ka jawab do tareeqon se diya ja sakta hai: lexical aur dynamic.

// // Lexical Scoping (Static Scoping)

// // Scope is baat se decide hota hai ke function code me kahan likha (define) hua hai, chahe wo kahin se bhi call ho.

// // Scope code likhte waqt hi fix ho jata hai (isi liye "static" bhi kehte hain).
// // "Lexical" ka matlab hai code ki likhawat/structure.
// // Dynamic Scoping

// // Scope is baat se decide hota hai ke function kahan se call hua hai (runtime par call stack dekh kar).

// // Scope run hote waqt decide hota hai.
// // Jis ne call kiya, uske variables pehle dekhe jaate hain.
// // Example se farq
// // javascript
// // var x = 10;

// // function foo() {
// //   console.log(x);
// // }

// // function bar() {
// //   var x = 20;
// //   foo();
// // }

// // bar();

// // Lexical scoping (JavaScript) me output: 10

// // foo global me likha hua hai, to uska outer scope global hai. Isliye x global se mila, chahe foo ko bar ke andar se call kiya gaya.

// // Agar dynamic scoping hoti to output: 20

// // Kyunke foo ko bar ne call kiya tha, to pehle bar ka x (20) dekha jata.

// // Execution Context se connection

// // Pichli baat yaad karo ke har execution context ke paas outer reference hota hai. JS me ye reference function ke define hone ki jagah se set hota hai, call hone ki jagah se nahi. Yahi wajah hai ke scope chain lexical hoti hai.

// // javascript
// // function outer() {
// //   var a = 5;
// //   function inner() {
// //     console.log(a); // outer ka 'a' mil jata hai
// //   }
// //   inner();
// // }
// // outer();

// // inner, outer ke andar likha hai, isliye outer ke variables tak pahunch sakta hai.

// // Closure bhi isi ki wajah se
// // javascript
// // function counter() {
// //   var count = 0;
// //   return function () {
// //     count++;
// //     return count;
// //   };
// // }

// // var c = counter();
// // console.log(c()); // 1
// // console.log(c()); // 2

// // counter() khatam ho chuka, phir bhi inner function ko count yaad hai, kyunke usne apna lexical environment saath rakh liya. Ye lexical scoping ke bina possible nahi.

// // Dono me Farq
// // Point	Lexical Scoping	Dynamic Scoping
// // Scope kis se decide hota hai	Function kahan likha hai	Function kahan se call hua
// // Kab decide hota hai	Code likhte waqt (static)	Run time par
// // Predictable	Haan, code padh kar samajh aa jata hai	Mushkil, call par depend karta hai
// // Closures	Possible	Nahi (asaani se)
// // Example languages	JavaScript, Python, Java, C, C++	Bash, purani Lisp, Perl (local)
// // Modern languages me	Almost sab use karti hain	Bahut kam
// // Ek cheez ka dhyan

// // JS ke variables lexical hain, lekin this dynamic jaisa behave karta hai, yaani wo is par depend karta hai ke function kaise call hua. Isi liye this me itni confusion hoti hai. Arrow functions me this bhi lexical hota hai.

// // Ek Line me

// // Lexical: "Tum kahan bane ho?" se scope decide hota hai. Dynamic: "Tumhe kis ne bulaya?" se scope decide hota hai. JS pehle wale ko follow karti hai

// // clousure

// Pehle ek zaroori cheez: setTimeout async hai

// setTimeout callback ko turant nahi chalata. Wo callback ko timer me daal deta hai aur code aage badh jata hai. Callback tab chalta hai jab:

// Timer complete ho jaye (1 second), aur
// Call stack bilkul khali ho (yaani poora loop khatam ho chuka ho).

// Isliye loop pehle poora chalta hai, callbacks baad me.

// Case 1: var (jo galat output deta hai)
// javascript
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// var function-scoped hai (yahan global). Loop ke andar bhi i ek hi jagah bana hai, memory me sirf ek i.

// Loop ke andar step by step:

// Iteration	i ki value	Kya hua
// 1	1	Callback 1 timer me gaya, usne i ka reference liya
// 2	2	Callback 2 timer me gaya, wo bhi usi i ka reference
// 3	3	Callback 3 timer me gaya, wo bhi usi i ka reference
// End	i++ se 4	Condition 4 <= 3 false, loop khatam

// Loop khatam hone par i = 4 reh gaya. 1 second baad teeno callbacks chalte hain aur teeno i ko dekhte hain, jo ab 4 hai.

// Memory:
//   i ──► 4   ◄── callback 1
//         ◄── callback 2
//         ◄── callback 3

// Teeno ek hi dabbe ko dekh rahe hain, isliye output 4 4 4.

// "3 kyun nahi, 4 kyun?" Interview me ye bhi poochte hain. Jab i = 3 tha, body chali, phir i++ ho kar 4 hua, phir condition check hui aur fail hui. Isliye loop ke baad i = 4.

// Case 2: let (jo sahi output deta hai)
// javascript
// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// let block-scoped hai. Loop me let ka khaas rule hai: har iteration ke liye i ki nayi copy (naya binding) banti hai.

// Iteration 1:  i₁ = 1  ◄── callback 1
// Iteration 2:  i₂ = 2  ◄── callback 2
// Iteration 3:  i₃ = 3  ◄── callback 3

// Har callback ka apna alag i hai, jo baad me change nahi hota. Isliye 1 second baad output 1 2 3.

// Naya i kaise banta hai? Har iteration ke end par JS purani i ki value copy karke naya i banata hai, aur i++ us naye i par lagta hai. Purana i jis callback ke paas gaya, wo wahin freeze rehta hai.

// let andar se aise kaam karta hai (samajhne ke liye)

// Ye bilkul let jaisa hai jo ham manually IIFE se karte the:

// javascript
// for (var i = 1; i <= 3; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

// Har iteration me IIFE call hota hai, to j ka naya function execution context banta hai, aur us j me us waqt ki value copy ho jati hai. Callback us j ko yaad rakhta hai (closure). let wahi kaam engine ke level par khud kar deta hai.

// Isme closure kahan hai?

// Har callback ek closure hai, jo apne bahar ke scope ka i yaad rakhta hai.

// var me sab closures ek hi i ko share karte hain, to sab ko final value milti hai.
// let me har closure ka apna i hota hai, to sab ko apni value milti hai.

// Yahi is sawal ka asli point hai: closure reference rakhta hai, value ki copy nahi. Ye reference kis cheez ka hai, wahi farq banata hai.

// Extra: aur bhi fixes (interview me bonus points)

// 1. setTimeout ka teesra argument

// javascript
// for (var i = 1; i <= 3; i++) {
//   setTimeout(function (j) {
//     console.log(j);
//   }, 1000, i);   // i ki value abhi pass ho gayi
// }

// 2. bind se

// javascript
// for (var i = 1; i <= 3; i++) {
//   setTimeout(console.log.bind(null, i), 1000);
// }

// Dono me i ki value usi waqt callback ko de di jati hai, to baad me i badalne se farq nahi padta.

// Interview me kaise jawab do

// "var function-scoped hai, to loop me sirf ek i hota hai. setTimeout ke callbacks async chalte hain, jab tak loop khatam ho kar i = 4 ho chuka hota hai. Teeno callbacks closure ke through usi ek i ko reference karte hain, isliye 4 4 4 aata hai. let block-scoped hai aur loop me har iteration ke liye naya binding banata hai, to har callback ka apna i hota hai aur output 1 2 3 aata hai. Purane tareeqe me IIFE se har iteration ke liye naya scope bana lete the."