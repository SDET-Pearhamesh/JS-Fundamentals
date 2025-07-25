//How to access methods of other class

// Add export keyword to the class whcih we want to access
// add this in package.json - "type": "module"


import { CustomerDetails } from "./lesson6.js";

var customerDetails = new CustomerDetails()
customerDetails.printFirstname("Rahul")

console.log("================================================================================")

//Rather than creating insant here - create inside export class and add export 

// This statement in lesso6.js - export const customerDetails = new CustomerDetails()

