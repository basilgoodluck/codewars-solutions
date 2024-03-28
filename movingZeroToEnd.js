function moveZeros(arr) {
    var mainArr = []
    var zeroArr = []
    arr.forEach(e=>{
        if (e !== 0){
            mainArr.push(e)
        }
        else zeroArr.push(e)
    })

    return mainArr.concat(zeroArr)
    
}