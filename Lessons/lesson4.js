//Loops

//Fot loop
for(var i = 1 ; i <= 10 ; i++){

    console.log(`Count : ${i}`)
}

var numbers = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]


// for of loop
for(var number of numbers ){

    console.log(`Number count : ${number}`)
    if(number == 8){
        break
    }
}

// ES6 Syntax for each loop 

numbers.forEach(number =>{
    console.log(`This is for each loop count : ${number}`)
})