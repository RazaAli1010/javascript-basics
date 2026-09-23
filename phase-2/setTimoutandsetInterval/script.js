// setTimeout(()=>{
//     console.log("after 5 seconds hello") // setTimout will call the function only once

// },5000)

// setInterval(()=>{
//     console.log("after 10 seconds hello again and again") // setInterval will call the function again and again after that interval
// },10000)

// Clear Timeout and clear interval

// we need to save setTimeout or setInterval in a variable in order to clear them

let interval=setInterval(()=>{
    console.log("hello")
},10000)

clearInterval(interval)