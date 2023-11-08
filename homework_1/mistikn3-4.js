function is_prime(number){
    if(number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
    return false;
}

console.log(is_prime(1))