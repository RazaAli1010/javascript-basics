// If else else-if
// switch statements
// early return pattern

if(65){
    console.log("true")
}
else{
    console.log("false")
}

if(12>20){

}
else if(12>18){

}
else if(12>16){

}
else if(12>14){

}
else{

}

// Switch Case

switch(4){
    case 1:
        console.log(1);
        break
    case 2:
        console.log(2)
        break
    case 3:
        console.log(3)
        break
    default:
        console.log("any other value")
}

// early return pattern

function getGrade(score){
    if(score>100 || score<0) return "Invalid marks"
    else if(score>89) return "A+"
    else if(score>79) return "A"
    else if(score>69) return "B"
    else if(score>59) return "C"
    else if(score>32) return "D"
    else return "Fail"
}

const grade=getGrade(89)
console.log(grade)