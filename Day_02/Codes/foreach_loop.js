// find the maximum no of an Array
let c = [4,5,9,6,2]
let max = c[0]
c.forEach((n) =>{
	if(n>max){
		max = n
	}
	//(n>max)? max=n: n=n
	//(max<n) && (max=n)
})
console.log("Maximum number in the array: "+max)