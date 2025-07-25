//Relational or comparision operators 

var x = 1

console.log(x == "1") // true - Loose comparison - Only value is compared not the data type 
console.log(x === "1") // false - Strict comparison - Both value and data type are compared

// Comaprison operators 
var result1 = 6 > 5 // true
var result2 = 4 < 6 // true
var result3 = 4 <= 6 // true
var result4 = 5 <= 5 // true
var result5 = 5 >= 3 // true

console.log("================================================================================")


//Logical operators. && - AND, || - OR

console.log(true && true) //true
console.log(true && false) //false

console.log(true || true) //true
console.log(true || false) //true

//Logocal not operator !

console.log( 5 !== 10)


console.log("================================================================================")


var condition = true

if(condition){
    console.log("If statement code will run")
}
else{
    console.log("else statement code will run")
}

// If hour between 6 to 12 print "Good Morning"
// If hour between 12 to 18 print "Good Afternoon"

var hour = 8

if(hour >= 6 && hour < 12){
    console.log("Good Morning")
}
 else if(hour >= 12 && hour < 18){
    console.log("Good Afternoon")
}

else{
    console.log("Good Evening")
}