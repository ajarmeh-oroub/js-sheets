var x = prompt("please enter a number ")

function cal_age( r){
 
var x =r.split('')
    if(x.length>8){
        console.log("u have a strong pass ");

}else {
    console.log("u have a weak pass");
}

}

cal_age(x)