function getMaxHonor(array,dayOfMonth) {
    let sum = 0;
    let tempArr = [];
    switch (dayOfMonth) {
        case dayOfMonth < 1 || dayOfMonth > 31: {
            console.log("no-no-no")
            return null;
        }
        case dayOfMonth % array.length !== 0 : {
            console.log("no-no-no")
            return null;
        }
        default: {
            for (let i = 0; i < dayOfMonth; i++) {
                for (let j = i; j < array.length; j += dayOfMonth) {
                    sum += array[j];
                }
                tempArr[i] = sum;
                sum = 0
            }
            tempArr.sort();
            return tempArr[dayOfMonth - 1];
        }
    }
}

console.log(getMaxHonor([5, 6, 7, 8, 9, 1], 2));