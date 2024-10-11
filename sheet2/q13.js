


function doubleChar(y){
var x= y.split('')
    for(let i = 0 ; i<x.length; i++){
        x[i]=x[i].concat(x[i])
       
    }
    return  x.join('')
}

console.log(doubleChar('Coding')); 