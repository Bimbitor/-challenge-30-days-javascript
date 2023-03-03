function createCalculator() {
    let total = 0
    
    
    // ? Métodos
    return {
        add(value) {
            return total += value;
        },
        
        subtract(value) {
            return total -= value;
        },
        
        multiply(value) {
            return total *= value;
        },
        
        divide(value) {
            return total /= value;
        },
        
        clear() {
            return total = 0;
        },
        
        getTotal() {
            return total;
        },
    }
}


const calculator = createCalculator()
console.log("add --------------" + calculator.add(10));
console.log("subtract --------------" + calculator.subtract(-10));
console.log("multiply --------------" + calculator.multiply(100));
console.log("divide --------------" + calculator.divide(5));
console.log("subtract --------------" + calculator.subtract(10));
console.log("clear --------------" + calculator.clear());
console.log("add --------------" + calculator.add(10));