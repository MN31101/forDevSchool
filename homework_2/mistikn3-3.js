function groupAnagrams(arr) {
    let tempArr = new Array()
    let tempArr2 = new Array();
    for (let arrKey in arr) {
        tempArr[arrKey] = arr[arrKey].split('').sort().join('');
    }
    for (let tempArrKey in tempArr) {
        if (tempArr[tempArrKey] in tempArr2) {
            tempArr2[tempArr[tempArrKey]].push(arr[tempArrKey]);
        } else {
            tempArr2[tempArr[tempArrKey]] = [arr[tempArrKey]];
        }
    }
    console.log(tempArr2)
}


groupAnagrams(["stra", "star", "pok", "arst", "kep", "epk", "kop", "sdas"]);

