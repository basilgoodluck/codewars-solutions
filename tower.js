function towerBuilder(nFloors) {
    // build here
    var result = ''
    var rowLength = 2 * nFloors - 1
    
    for(var i = 1; i <= nFloors; i++){
      
      var noStars = 2 * i - 1
      var noSpaces = Math.floor((rowLength - noStars)/2)
      var spaces = ' '.repeat(noSpaces)
      var stars = '*'.repeat(noStars)     
      var row = '' 

      result.concat(`${spaces}${stars}${spaces}`)
    }
    return result;
}


