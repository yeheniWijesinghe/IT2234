//Rest parameter

const mysum1 = (...n)=>{
	console.log(n)
}
mysum1(4,5,6,89,2)


//take the sum of above numbers
const mysum2 = (...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t) //106
}
mysum2(4,5,6,89,2)


//better way to do addition
const mysum = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,8,2))