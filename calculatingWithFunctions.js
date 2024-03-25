function nine(m) {
    if(m){
        return m(9)
    }
    return 9;
}

function plus(num) {
    return '+'+num;
}

console.log(nine(plus(nine())))