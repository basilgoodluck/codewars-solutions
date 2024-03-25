function divisors(integer) {
    const arr = [];
    for(var i = 2; i <integer; i++){
        if(integer % i == 0){
            arr.push(i)
        }
    }
    if (arr.length === 0){
        return integer + " is a prime number"
    }
    else return arr.toString()
};

console.log(divisors(2));

