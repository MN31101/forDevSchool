function isTrue(str, key, abc) {
    let tempValue = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            if (str[i] !== abc[j]) tempValue += 1;
        }
    }
    if (tempValue !== ((abc.length - 1) * (str.length))) return 0;
    return 1;
}
class VigenèreCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }
    encode = function (str) {
        if (!isTrue(str, this.key, this.abc)) return str;
        key = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);
        let tempStr = [];
        let countForStr = 0;
        let countForKey = 0;
        let number;
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < abc.length; j++) {
                if (key[i] !== this.abc[j]) {
                    countForKey++;
                } else {
                    break;
                }
            }
            for (let j = 0; j < abc.length; j++) {
                if (str[i] !== abc[j]) {
                    countForStr++;
                } else {
                    break;
                }
            }
            number = countForStr + countForKey ;
            if (number > abc.length) number -= abc.length;
            tempStr[i] = abc[number];
            countForKey = countForStr = 0;
        }
        return tempStr.join('').toString()
    }
    decode = function (str) {
        if (!isTrue(str, this.key, this.abc)) return str;
        key = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);
        let tempStr = [];
        let countForStr = 0;
        let countForKey = 0;
        let number;
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < abc.length; j++) {
                if (key[i] !== abc[j]) {
                    countForKey++;
                } else {
                    break;
                }
            }
            for (let j = 0; j < abc.length; j++) {
                if (str[i] !== abc[j]) {
                    countForStr++;
                } else {
                    break;
                }
            }
            number = countForStr - countForKey;
            if (number < 0) number += abc.length;
            tempStr[i] = abc[number];
            countForKey = countForStr = 0;
        }
        return tempStr.join('').toString()
    };
}


let abc = "abcdefghijklmnopqrstuvwxyz";
let key = "pizza"

c = new VigenèreCipher(key, abc);
let encoded = c.encode('pancakes');
let decoded = c.decode(encoded);
console.log(` > encoded: ${encoded}\n > decoded: ${decoded}`);





*/