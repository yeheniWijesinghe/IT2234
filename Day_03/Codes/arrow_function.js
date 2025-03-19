//arrow function

//msg is a constant variable here
const msg = ()=>{return("Hello JS")}
console.log(msg)

//You can assign the function as a variable in arrow function

//This msg is a function
const mesg = ()=>{return console.log("Hello JS")}
mesg()

//write an arrow function to sum 2 numbers

const add = (a,b)=>{return a+b}
console.log(add(4,5))

//default parameter (b is a default parameter)
const mult = (a, b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4)) 