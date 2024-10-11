var x= ["Coding", "Academy", "By", "Orange"]
var k = parseInt(prompt("enter the inde of the element that you want to delete "))
function del(y){
console.log(y);
for (let i=0 ;i<x.length ; i++ ){

 if (i==y){
 x.splice(y,1);
 }

}
return x

}

 console.log(del(k)); 