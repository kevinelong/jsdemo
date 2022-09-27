console.log("Hello World!!!");

a = 123

console.log( a * 2);

var message = "Welcome to JavaScript";
var my_name = "Natalie";
var age = 37;
var outputString = "Name: " + my_name + " Age: " + age;
console.log(outputString);


//EXERCISE 1


var customerID = 123;
var firstName = "kevin";
var genderIdentifiedAs = "other";
var DOB = "1967-09-13";
var licenseNumber = "1234-5678-9111";
var policyNumber = "9999-8888-7777-2222";

// Name ten reserved words:
// All of the "key words" 
// AKA javascript commands
// are "reserved words"
// that can't be used as variable names.
/*
var
let
const
if
else
for
while
break
continue
function
*/
/* HTML DOM javascript reserved words
document
body
window
console - missing from the web page
alert
forms
frame
location
history
self
*/
/* HTML event handlers that are reserved words
blur
click
focus
mouseover
submit
keyup
load
error
keypress
*/

//EXERCISE 1 SECION 2-33 PAGE 81
a = " 101.1 "
b = "55"
c = "402 Stevens"
d = "Number 5 "
console.log(parseInt(a)); // 101
console.log(parseFloat(a)); // 101.1
console.log(Number(a)); // 101.1
console.log(+a); // 101.1

console.log(parseInt(b)); // 55
console.log(parseFloat(b)); // 55
console.log(Number(b)); // 55
console.log(+b); // 55

console.log(parseInt(c)); // 402
console.log(parseFloat(c)); // 402
console.log(Number(c)); // NaN
console.log(+c); // NaN

console.log(parseInt(d)); // NaN
console.log(parseFloat(d)); // NaN
console.log(Number(d)); // NaN
console.log(+d); // NaN

//EXERCISE 1 SECTION 2-11 PAGE 59

//inputs - AKA arguments/parameters
const foodCost = 79.25;
const tax = 6.54;
const tip = 12;

//calculation
let totalDue = foodCost + tax + tip;

//output
console.log("The total due is " + totalDue)

//EXERCISE 2 PT 1 SECTION 2-12 PAGE 60

//EXPECTED OUTPUT  "The total due is 97.79"
const assets = 1234; // all bank accounts property values
const debts = 2000; // all loans
const netWorth = assets - debts; // total/difference
console.log("Your net worth is " + netWorth);

//EXERCISE 2 PT 2 SECTION 2-12 PAGE 61
let width = 6;
let length = 7;
let area = length * width;
console.log("The area of a rectangle is " + area);

//EXERCISE 2 PT 3 SECTION 2-13 PAGE 61
//TIP AMOUNT
let billTotal = 49.99;
let tipPercent = 0.20; 
let tipAmount = billTotal * tipPercent;
//BONUS use the .toFixed method to hide the floating point error
console.log("The tip on a " + billTotal + " food bill is " + tipAmount.toFixed(2));

//EXERCISE 2 PT 4 SECTION 2-13 PAGE 61
// PI * R^2
radius = 3
area = Math.PI * (radius * radius); //WORKS
//area = Math.PI * Math.pow(radius, 2); //ALSO WORKS
//area = Math.PI * (radius^2); //BROKEN


console.log("The area of a circle with radius " + radius + " is " + area);
//EXPECTED input of 3 yields 28.274333882308138

//EXERCISE 2 PT 5 SECTION 2-13 PAGE 61
x = 1000 //ignored
IR = 3 // integer version (3) not fractional version (0.03)
double = x * 2
years = 72 / IR; 
//formula from: https://www.investopedia.com/terms/r/ruleof72.asp
// and https://en.wikipedia.org/wiki/Rule_of_72
console.log(years);

