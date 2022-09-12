function getPrimes(n) {
    let primes = [2];    
    for (let i = 3; ; i++) {        
        let divs = [];
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                divs.push(j);                
            }
        }      
        if (divs.length == 0) primes.push(i);          
        
        if (primes.length == n) return primes;
    }
}

console.time()
console.log(getPrimes(process.argv[2]))
console.timeEnd()