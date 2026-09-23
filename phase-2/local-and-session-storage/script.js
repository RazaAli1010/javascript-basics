// Basic Difference

// Cookies

// Size limit: ~4KB
// Server ko har request ke saath automatically bhej jaate hain (agar domain match kare)
// Expiry set kar sakte ho (kuch minutes se lekar years tak)
// Secure, HttpOnly, SameSite jaise flags se security control kar sakte ho

// localStorage

// Size limit: ~5-10MB (browser ke hisaab se vary karta hai)
// Sirf browser mein rehta hai, server ko apne aap nahi jaata
// Permanent hota hai — jab tak manually clear na karo ya user browser data clear na kare
// Tab/window close karne ke baad bhi data rehta hai

// sessionStorage

// Size limit: localStorage jaisa hi (~5-10MB)
// Sirf ek tab ke liye scoped hota hai
// Tab close karte hi data gayab ho jaata hai
// Different tabs mein same site open karo, alag-alag sessionStorage milega
// Kab Kya Use Karna Hai

// Cookies use karo jab:

// Server ko data chahiye ho har request mein (jaise authentication token, session ID)
// Login sessions manage karne ho
// Cross-request tracking chahiye ho (analytics, preferences server-side)
// js
// document.cookie = "sessionId=abc123; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/; Secure";

// localStorage use karo jab:

// User preferences save karni ho jo long-term rehni chahiye (theme: dark/light, language)
// Cart data, drafts, ya cache jo page reload ke baad bhi chahiye
// Server ko is data ki zarurat nahi hai, sirf client-side use hoga
// js
// localStorage.setItem("theme", "dark");
// let theme = localStorage.getItem("theme");

// sessionStorage use karo jab:

// Temporary data jo sirf current session/tab ke liye relevant hai
// Multi-step forms ka temporary state (jaise wizard steps)
// Data jo tab band hote hi delete ho jana chahiye — sensitive ho ya bas zarurat na ho
// js
// sessionStorage.setItem("formStep", "2");
// Quick Rule of Thumb
// Zarurat	Use karo
// Server ko pata hona chahiye	Cookie
// Login/auth token	Cookie (HttpOnly ke saath, security ke liye)
// Long-term user preference	localStorage
// Sirf is tab ke liye temp data	sessionStorage
// Sensitive data jo turant expire ho	sessionStorage ya short-expiry cookie

// Agar security ki baat karein, toh sensitive data (jaise auth tokens) ke liye cookies with HttpOnly aur Secure flags best hain, kyunki localStorage/sessionStorage JavaScript se accessible hote hain — isliye XSS attack mein vulnerable ho sakte hain.

// localStorage

localStorage.setItem("name","Raza Ali")


// sessionStorage bhi similar bus jaise hi tab close karoga data lose hojaya ga

// similar methods like local storage

// local or sessionStorage ma sirf string store kar sakta hai

// tu array or objects kaise store kara??

// uske liye JSON use karna padega

localStorage.clear()

localStorage.setItem("friends",JSON.stringify(["awais","raza"]))

let awais=JSON.parse(localStorage.getItem("friends"))[0]