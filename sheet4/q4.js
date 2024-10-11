var x=[1, 2, 3, 4, 5] 
var map1 = x.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) 
console.log(map1);
//////output = 15 