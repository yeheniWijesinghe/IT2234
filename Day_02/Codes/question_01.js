/*find the common elements between a and b*/
let a = [4,5,6,3,7]
let b = [8,3,2,1,5]

a.forEach((n) =>{
	b.forEach((m) =>{
		(m==n)? console.log(m):-1
	})
})

console.log("\n")

/*arr = [1,2,3,4,5,6]
target = 7
write a code to find the all pairs that sum up to the target*/

let arr = [1,2,3,4,5,6]
target = 7
arr.forEach((i) =>{
	arr.forEach((j) =>{
		if((i+j)==target){
			console.log(i+","+j)
		}
	})
})

console.log("\n")

/*find the most frequent element in the array*/

let array1 = [4,8,3,4,3,2,1,8,4]
let count = 0
let frequencymap = {}
let mostfrequentelement = 0

array1.forEach((n)=> {
	frequencymap[n] = (frequencymap[n] || 0)+1
	if(frequencymap[n]>count){
		mostfrequentelement = n
	}
})
console.log("Most frequent element: "+mostfrequentelement)
console.log("\n")

//push and pop is possible in array opperations
//reverse the array using push and pop
let arr3 = ['a','b','c']
let arr4 = []
arr3.push('e')
console.log(arr3)

console.log("\n")

for(let i=0; i<=arr3.length+1; i++){
	let x = arr3.pop()
	arr4.push(x)
}
console.log(arr4)

console.log("\n")
let arr5 = ['a','b','c']
let arr6 = []

arr5.forEach((k) =>{
	arr6.forEach((l) =>{
		arr6.push(arr5.pop())
	})
})
console.log(arr6)

