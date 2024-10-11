console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Mazen')); 


function findIndex(x , y){
    var z
    for(let i =0 ; i<x.length; i++){
        if(x[i]==y){
           z= i 
        }
    }
    return z
}