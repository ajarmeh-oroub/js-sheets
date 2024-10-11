

function findSmallest(x){
  
    let  m=x[0]
    for(let i=0 ; i<x.length;i++){
        if(m>x[i]){
            m=x[i]
 }
    }

return m
}


console.log(findSmallest([30,45,60,7])); 

