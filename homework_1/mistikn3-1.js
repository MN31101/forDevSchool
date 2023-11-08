function funcForSearch(number){
    let sum = 0;
    for (let i = 1; i <= number ; i++) {
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}
let number_0 = 10;
let number_1 = funcForSearch(number_0); //33! 0-не натуральне
console.log(funcForSearch(number_1));