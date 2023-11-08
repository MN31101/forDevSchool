function equivalentsArray(array){
    let arr = array;
    let tempArr = new Array();
    let valueOfIndexes = 0;
    let sumRightPart = 0;
    let sumLeftPart = 0;
    for (let i = 0; i < array.length; i++) {
        tempArr = array.slice(0, i);
        array = array.slice(i+1, array.length)
        for (let arrayKey in array) {
            sumRightPart += array[arrayKey];
        }
        for (let tempArrKey in tempArr) {
            sumLeftPart += tempArr[tempArrKey];
        }
        if (sumRightPart === sumLeftPart) {
            valueOfIndexes = i;
            console.log(`Well Done on index ${valueOfIndexes}`)
            break;
        }else if( i === array.length -1){
            console.log("Anything")
            break;
        }
        sumLeftPart = 0;
        sumRightPart = 0;
        array = arr;

    }
}
equivalentsArray([1, 2, 3, 4, 3, 2, 1])