function landperimeter(arr){
    let sum = 0;
    let column = arr[0].length; // рядки
    let row = arr.length; // стовпці
    let tempArr = new Set();
    for (let arrKey in arr) {
        if(arr[arrKey].length != column){
            console.log("wtf?")
            return 0;
        }
        arr[arrKey].split('');
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column;  j++) {
            if (arr[i][j] === "X") {
                tempArr.add([i + 1 ,j + 1]);
                sum += 4;
            }
        }
    }

    tempArr = Array.from(tempArr)

    for (let i = 0; i < sum/4; i++) {

        if (tempArr[i+1][0] - tempArr[i][0] == 1) {
            sum -= 2;
        }
        console.log(tempArr[i][1])
        if (tempArr[i+2][1] - tempArr[i][1] == 0){
            sum -= 2;
        }
    }

    console.log(tempArr)
    console.log(sum)
}


landperimeter(
    ['XOOO',
        'XOXO',
        'XOXO',
        'OOXX',
        'OOOO']
);