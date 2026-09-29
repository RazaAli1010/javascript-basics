fetch("https://randomuser.me/api/")
.then((rawData)=>{
       return rawData.json()
})
.then((data)=>{
    const{first, last}=data.results[0].name
    console.log(first)
    if (first.startsWith("C")){
        console.log("starts with C")
    }else{
        console.log("happy name")
    }
    
})
.catch((err)=>{
    console.log(err)
})