function reverseInteger(str) {
    return +(str.toString().split('').sort().reverse().join(''));
}
console.log(reverseInteger(24432423423))