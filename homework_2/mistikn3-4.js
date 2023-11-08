function putOn(arr){
        if (arr.length == 0 || arr[0] == "[]" || arr[0] == ""){
        return;
    }

        let tempArr = new Set([]) ;

        tempArr = arr.reduce((total, amount)=>{
                for (let i = 0; i < amount.length; i++) {
                        total.push(amount[i]);
                }
                return total;
        });

        let count = 0;
        for (let tempArrKey in tempArr) {
                tempArr[tempArrKey] = tempArr[tempArrKey].split('');
                if (tempArr[tempArrKey][0] != "[" && "]"){
                        delete tempArr[tempArrKey];
                        count++;
                }if (tempArr.length == 6) {
                        delete tempArr[tempArrKey];
                        tempArr[tempArrKey].flat();
                        count++;
                }
        }
        for (let tempArrKey in tempArr) {
                tempArr[tempArrKey].splice(0,1);
                tempArr[tempArrKey].splice(-1);
        }

        tempArr.sort().splice(tempArr.length -count);

        count = 0;

        for (let tempArrKey in tempArr) {
                tempArr[tempArrKey].join('');
                if((tempArr[tempArrKey][0] != tempArr[tempArrKey][1]) ||
                    (tempArr[tempArrKey][1] != tempArr[tempArrKey][2]) ||
                    (tempArr[tempArrKey][2] != tempArr[tempArrKey][3])){
                        delete tempArr[tempArrKey];
                        count++;
                }
                if (tempArrKey%5 == 0 && tempArrKey != 0){
                        delete tempArr[tempArrKey];
                        count++;
                }
        }

        tempArr.sort().splice(tempArr.length -count);

        tempArr = tempArr.reduce((total, amount)=>{
                for (let i = 0; i < amount.length; i++) {
                        total.push(amount[i]);
                }
                return total;
        });

        tempArr.join('');

        console.log(tempArr.join(''));
}

putOn([[ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ],[ "[@@@@]", "UwU",  "[IlII]" ],[ "IuI", "[))))]", ""],[]]
)