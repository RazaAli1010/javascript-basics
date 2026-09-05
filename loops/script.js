// kaam ko repeat karna loop keh lata hai

// Different types of loops

    // 1) for
    // 2) for each
    // 2) while
    // 3) do-while

// kaha sa jana hai -> kaha tak jana hai -> kaisa jana hai
    // is scenario ma for loop laga ga

// kaha sa jana hai -> kab rukna hai -> kaisa jana hai
    // is scenario ma while loop use karna hai

// for loop syntax

// for(let i=0; i<=100; i++){
//     if (i%2===1) continue
//     console.log(i)
// }

// while loop syntax

// let i=1;
// while(i<=100){
//     console.log(i)
//     i++
// }

// do while syntax

// let i=12
// do{
//     console.log(i)
//     i++
// }
// while(i<2)

function sumOfDigit(val){
    let totalSum=0
    while(val>0){
        let digit=val%10
        totalSum+=digit
        val=Math.floor(val/10)
    }
    return totalSum
}

let myValue=123
console.log(sumOfDigit(myValue))