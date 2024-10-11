


function getAbsSum(y){
    var sum=0

    for(let i = 0 ; i<y.length; i++){
    
      sum +=Math.abs(y[i])
    }
    return sum
}

console.log(getAbsSum([-1, -3, -5, -4, -10, 0]) );