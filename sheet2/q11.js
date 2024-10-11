

function multiplyByLength(x){
var y = x.length
    for(let i=0 ; i<x.length; i++){
   x[i]*= y
    }
return x
}

console.log(multiplyByLength([4,2,5]));