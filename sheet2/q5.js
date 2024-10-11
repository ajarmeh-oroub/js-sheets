

function evenNum(x){

    for(let i=0; i<x.length ; i++){
    if(x%2!=0){
        x.splice(i,1)
    }
}
return x
}

console.log(evenNum([1, 2, 3, 4, 5, 6,7,8,9])); 