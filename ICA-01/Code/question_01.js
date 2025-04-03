function getMaxPurchaseAmount(budget, keyboards, mice) {
    let maxAmount = -1;
    
    for (let k of keyboards) {
        for (let m of mice) {
            let total = k + m;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }
    
    return maxAmount;
}


console.log(getMaxPurchaseAmount(60, [40, 50, 60], [5, 8, 12])); 
console.log(getMaxPurchaseAmount(10, [3, 1], [5, 2, 8])); 
console.log(getMaxPurchaseAmount(20, [30, 15], [8, 10, 6])); 