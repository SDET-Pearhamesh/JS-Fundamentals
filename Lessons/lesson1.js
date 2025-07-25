// Hello World
console.log("Hello world");


//Variables

var firstname = "Rahul"
let lastname = "DJ"

console.log(firstname + " "+lastname)

var age, DOB, sex

age = 24
sex = "Male"
DOB = "01/01/2001"

console.log(firstname + " "+lastname + " , Age : " + age + ", Sex : " + sex) 

age = 25
console.log("Override new value for age variable : " + age)

//Constants
//This must declared with value 
const occupation = "Engineering"
console.log(occupation)

// data types
var firstname = "David"
var name = 'Warne'
var age = 25
var isMarried = false
var marriedYear = null 
var profession = undefined

//Concatination and Interpoation

var item = "cup"
var value = 50
var message = "Your cart has "+ item + " with value of " +  value // Concatination
console.log(message)


var message2 = `Your cart has ${item} with value of ${value}` // interpolation
console.log(message2)


