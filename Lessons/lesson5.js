//Declarative Functions


helloOne() //Calling function - If call declarative function even before it will work 

function helloOne(){
    console.log(`declarative function hello one`)
}

helloOne() //Calling function

console.log("================================================================================")

// Anonymus function - To call we need to store in variable so 

var helloTwo = function(){
    console.log(`Anonymus function hello two`)
}

helloTwo() //We have call function after the declaring 

console.log("================================================================================")

// ES6 Function syntax or arraw function

var helloThree = ()=> {
    console.log(`ES6 Function or arraw function hello three`)
}

helloThree()

console.log("================================================================================")

// Function with argument 

function printName(name , lastname){
console.log(`Print name function, name is ${name} ${lastname} `)
}

printName('John' , 'Smith')

console.log("================================================================================")

//Function with return 

function squareGivenNumber(number){

    var result = number * number
    return result
}

console.log(squareGivenNumber(6))