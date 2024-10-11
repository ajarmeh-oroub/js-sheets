var x = prompt("Enter a list of items separated by commas: ")
var y = x.split(",")
function cal_age( r){
 

    if(Array.isArray(r) && r.length>1){
        console.log("this is an array");

}else {
    console.log("this is not an array");
}

}

cal_age(y)