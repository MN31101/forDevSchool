function highAndLow(str) {
    str = str.split(' ').sort().reverse();
    let array = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
        array[i] = +str[i]
    }
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                 temp = array[i];
                 array[i] = array[j];
                 array[j] = temp;
            }
        }
    }
    return `Max value = ${array[array.length - 1]}, min value = ${array[0]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));