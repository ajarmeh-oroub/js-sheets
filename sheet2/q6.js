

function numbersOnly(x){
    for (let i = 0 ; i<x.length; i++){
   if(typeof(x[i])=='string'){
    x.splice(i,1)
   }
    }
    return x
}

console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 