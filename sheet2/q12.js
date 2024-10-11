console.log(checkEnding("CodingSchool", "Ac")); 


function checkEnding(x , y){

    var n = x.length-2
  
    console.log(n);
    console.log(x.substring(n , x.length));
    if(x.substring(n , x.length) === y.substring(0)){
        return true
    }else
    return false

}