function maxNumber(num) {
    if (num < 10) {
        console.log("Number should have at least 2 digits.");
        return null;
    }
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(maxNumber(215));  // Output: 521
console.log(maxNumber(1093)); // Output: 9310