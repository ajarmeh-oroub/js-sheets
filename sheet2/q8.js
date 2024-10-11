

function minMaxLengthAverage(x){
   let y=[]
   y[0]=maxi(x)
   y[1]=mini(x)
   y[3]=x.length
   y[2]=avg(x)


return y
}

function maxi(x){
    var max=x[0]
   for(let i=0 ; i<x.length ; i++){
    if(x[i]>max){
        max=x[i]
    }
   }
   return max
}

function mini(x){
    var min=x[0]
   for(let i=0 ; i<x.length ; i++){
    if(x[i]<min){
        min=x[i]
    }
   }
   return min
}

function avg(x){
    let sum=0
    for(let i=0 ; i<x.length ; i++){
 sum+=x[i]
    }
    return sum/x.length
}

console.log(minMaxLengthAverage([7,13,3,77,100]))