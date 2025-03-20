//callback Function
const greet = (msg, fun)=>{
	console.log("Hi.. "+msg)
	fun()
}
greet("Good Morning", ()=>{console.log("My name is Yeheni")})


const multtwo = (n)=>n*2

const myarr = (mul, ...n)=>{
	//return n.reduce((t,i)=>t=t+i)
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multtwo,4,5,6,8,2)