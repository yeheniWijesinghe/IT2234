//write recursive function to print numbers from 1 to n
function recursiveNumber(k){
	if(k==0){
		return -1
	}
	else{
		console.log(k)
		recursiveNumber(k-1)
	}
}
recursiveNumber(8)