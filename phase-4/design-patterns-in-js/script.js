// Design Patterns

// Module Pattern 

// IIFE(Immediately Invoked Function Expression )

// let Bank=(function(){
//     let bankBalance=1000

//     function getBalance(){
//         return bankBalance
//     }
//     function withdraw(amount){
//         if (amount<=bankBalance){
//             bankBalance-=amount
//             return bankBalance
//         }
//         return "Not enough balance in the account"
        
//     }
//     function deposit(amount){
//         if (amount>0){
//             bankBalance+=amount
//             return bankBalance

//         }
//         return "please add a valid amount"
//     }
//     return {
//         getBalance,deposit,withdraw
//     }
// })()

// console.log(Bank.deposit(12))

// revealing modular pattern

// just one change

// let Bank=(function(){
//     let bankBalance=1000

//     function getBalance(){
//         return bankBalance
//     }
//     function withdraw(amount){
//         if (amount<=bankBalance){
//             bankBalance-=amount
//             return bankBalance
//         }
//         return "Not enough balance in the account"
        
//     }
//     function deposit(amount){
//         if (amount>0){
//             bankBalance+=amount
//             return bankBalance

//         }
//         return "please add a valid amount"
//     }
//     return {
        
//         get:getBalance,
//         dep:deposit,
//         draw:withdraw
//     }
// })()

// console.log(Bank.get())


// Factory Function Pattern

function createUser(name, age, email){
    let id=Math.floor(Math.random()*1000)
    return {
        name,
        age,
        email,
        showId(){
            return id

        }
    }
}

let user1=createUser("Raza Ali",23,"raza@gmail.com")
console.log(user1.showId())

// Observer Pattern