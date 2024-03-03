// return masked string
let cc = "38393028320"
function mask(rh) {
    const numbers = rh.split("");
    return numbers.map(num => {
        return num.replace(/./g, '#')
    }).join("")
}


function maskify(hh){
    return hh.slice(0, -4).replace(/./g, "#") + hh.slice(-4)
}