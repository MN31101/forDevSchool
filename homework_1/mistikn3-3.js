function findNB(find_nb){
    let temperance = 0;
    let i = 1;
    while(temperance < find_nb){
        temperance += i**3;
        i++
    }
    if (temperance == find_nb) return i - 1;
    return -1;

}

console.log(findNB(894915));

//  Я чесно кажучи не знав що сума кубів послідовності н+1 і квадрат числа послідовності н+1 будуть пов'язані