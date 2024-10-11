var x= "OrAnGe"


    var y =x.split('')
for(let i =0; i<y.length; i++){

if (y[i]==y[i].toUpperCase()){
   y[i]= y[i].toLowerCase()
}else {
    y[i]= y[i].toUpperCase()
   

}
}

console.log(y.join(''));