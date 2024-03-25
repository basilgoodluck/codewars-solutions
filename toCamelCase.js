
function toCamelCase(str){
    var result = ""
    var delimeterPattern = /[-_]/;
    str.split(delimeterPattern).forEach((e, idx)=>{
        if (idx == 0){
          result += e
        }
        else{
            result += e.charAt(0).toUpperCase() + e.slice(1)
        }
    })
    return result;
}

let ght = 'dsgo-dsa_aGj-jdao_ja'
console.log(toCamelCase(ght))

