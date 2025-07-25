// Objects 

var customer = {

    firstname: 'Michael' , 
    lastname: "Jordan"
}

console.log(customer) //this will print entire object in key and value pair - { firstname: 'Michael', lastname: 'Jordan' }
console.log(customer.firstname) //Dot notation - Just to print value of firstname
console.log(customer['lastname']) //Bracket notation - Just to value of lastname

customer.firstname = "Lebron"
customer['lastname'] = "James"
console.log(`${customer.firstname} ${customer.lastname}`)


// arryas

var car = ["Volvo" , "Toyota" , "Tesla" ]
car[1] = "TATA"
console.log(car[1])


var customer = {

    firstname: 'Michael' , 
    lastname: "Jordan" , 
      car: ["Volvo" , "Toyota" , "Tesla" ]
}

console.log(customer.car[1])