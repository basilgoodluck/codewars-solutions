function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    const romanObj = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    let result = 0;

    for(var i = 0; i < roman.length; i++){
        let currentIdx = romanObj[roman[i].toUpperCase()]
        let nextIdx = romanObj[roman[i + 1]]

        if(currentIdx < nextIdx) {
            result += nextIdx - currentIdx
        }

        else result += currentIdx
    }

    return result;
}

console.log(solution('MMDcxXI'))




