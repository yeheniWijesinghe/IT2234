//print the nested Array

let array = [[1,2,30],[5,6],[8,5,3]]
console.log(array)

console.log("\nUsing for loop")
for(let i=0; i<array.length; i++){
	for(let j=0; j<array.length; j++){
		console.log(array[i][j])
	}
}

console.log("\nUsing for each loop")
array.forEach((n) =>{
	n.forEach((m) =>{
		console.log(m)
	})
})