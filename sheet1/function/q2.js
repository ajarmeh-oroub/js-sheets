var num= "0774343916"

function hide( s){
    let result= s.split('')
for(var i=0 ; i<7; i++){
    
    result[i]='*'
   
}
return result.join('')
}


var r=hide(num)

console.log(r);