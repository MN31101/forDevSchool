function getRootProperty(obj,value){
    let arr = [];
/*
    console.log(Object.entries(obj))
*/

    for (let objKeys in obj) {
        arr[objKeys] = Object.entries(obj);
    }

    for (let arrKey in arr) {

    }

}



object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}

getRootProperty(object, 250);
/*

for (let objKeysKey in obj[objKeys]) {
    console.log([objKeysKey])
}*/
