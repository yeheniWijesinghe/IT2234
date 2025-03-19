//write a boolean function to find a given number is prime
function isPrime(n) {
    if (n < 2) return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}

console.log("2 is: "+isPrime(2))  
console.log("9 is: "+isPrime(9))  
console.log("7 is: "+isPrime(7))  
 
