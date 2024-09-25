/*
M2 Assignement    
Student: Bethany Hooten
    Date: 9/24/24
*/


// 1. Convert the following highlighted identifiers to Camel Case notation:
function toCamelCase(str) {  // Step 1 (funtion)
    return str.replace(/[_](.)/g, (match, char) => char.toUpperCase());  // Step 2 return with toUpperCase
}
console.log(toCamelCase('septmber_october_november'));  // Step 3 console log

// 2. Give me an example of a numeric literal expression, a string literal expression,
//    a Boolean literal expression, and a null literal expression.

// string expression
let messageTK = 'Hi, Professor. Thank you for teaching us Javasript'
console.log(messageTK)

// Boolan expression
let x = 45 // step 1
let y = 45  // step 2
console.log(x == y)  // step 3 output "true"

// null expression
let a = 100 // step 1
let b = null // step 2
a = null // step 3
console.log(a) // step 4 output "null"

// 3. Give me two examples of complex / variable expressions.
// 4. Declare (but do not assign) 9 variables for the following identifiers:
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source,
// May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
// 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways
//    for declaring and assigning values to those variables.
// 6. 
let yearsmarried = 11
console.log('Mary has been married for ' + yearsmarried + ' years.')

// 4. Declare (but do not assign) 9 variables for the following identifiers:
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, 
//May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

// 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

// 6.  Create a variable.
//Add a number and a string and display the coerced result in the browser’s console window.

// 7. Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.

let checkLoggedIn1 = "true"
let checkLoggedIn2 = "true"
console.log(checkLoggedIn1 == checkLoggedIn2)

// 8. Is the following string literal valid? If not, how would you fix it?
let someString = 'Who once said, "Only two things are infinite, the unviverse and human stupidity, and Im not sure about the former."'
console.log(someString)

// 9. Create a variable that produces a null value in the console window.
//    Then, create a variable that produces an undefined value in the console window.
let ss = 100  //Step 1
let oo = null  //Step 2
ss = null       //Step 3
let v          //Step 4
console.log(ss)  // null
console.log(oo)  // null
console.log(v)  // undefined

// 10. Use the unary typeof operator on various literals to return the following 
//types within the console window: string, number, Boolean, object, and undefined.

console.log(typeof 'John')
console.log(typeof 0)
console.log(typeof true)
console.log(typeof null)
console.log(typeof z)

// 11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

let studnetName = 'Bethany Hooten'
console.log('Hello ' + studnetName + ', welcome to the JavaScript class!')

// 12. Declare a variable called name and set it equal to your name.
//Substitute your name in the previous alert string with the variable instead.

let myName = 'Bethany'
window.alert("Hello " + myName)

// 13. Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

let course = 'JavaScript'
window.alert(course)

// 14. Rework the above string so that a line break is added right before the word “Welcome”. 

let stringMessage = 'Hello Zak Ruvalcuba.\nWelcome to the JavaScript class!'
console.log(stringMessage)

// 15. Replace the hardcoded string of your name with a prompt that asks the user for their name.
//     The prompt’s response will now be captured in the name variable.

let userName = prompt('What is your name?', 'Zak')
if (userName) {
    alert("Welcome, " + userName + "!")
}
// 16.
// 17.
// 18.
// 19.
// 20. 

// 21. Using a set of Comparison and Logical operators, write an application that evaluates to true
let xx = 7
let bb = 4
console.log(xx != bb) // true

// 22. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. 
let f = 3
let g = '3'
console.log(f === g) // false
