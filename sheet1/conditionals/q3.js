var x =  "coding academy by Orange"
var y = x.split(' ')


for(let i =0 ; i<y.length ; i++){

   y[i]= y[i].charAt(0).toUpperCase() + y[i].substring(1)
}


console.log(y.join(''));
