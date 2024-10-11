var x= [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] 
var y=[]
var z=[]
for (let i = 0; i<x.length; i++){

    if(x[i]%2==0){
        y.push(x[i])
    }else{
        z.push(x[i])
    }
    }

console.log(x);
console.log(y);
console.log(z);