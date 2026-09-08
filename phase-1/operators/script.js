// Operator is JavaScript

// Arithematic Operators
    // {+,-,*,/,%,**}


//Comparison Operators
    // {===,==,!=,!==,<,>,<=,>=}

// Assignment Operator
    //{=,+=,-=,/=,*=,%=}

// Logical Operator
    // {&&,||,!}

// Unary Operator
    // {+,-,++,--,typeof, bitwise not ~,delete, void, !}

// Ternary Operator
    // {?:}
    // condition ? true ka code : false ka code
    // a===3 ? "a is 3" : "a is not 3"


// Topic 2 typeof vs instanceof

// typeof quirks

// 1) for some data types it give wrong data type
    // For Example typeof null -> object| typeof [] -> object

// instanceof

let myAddress=[];
// myAddress instanceof Array

//Important Note

    // typeof is use with primitive types and instanceof use with reference type

// best way check Array
    // Array.isArray([]) -> true
                   