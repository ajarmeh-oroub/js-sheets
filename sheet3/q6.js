var x =prompt("please enter any char")

function cal_age( r){
 

    if( r.length==1 && typeof(r)=='string'){
        console.log("this is a char ");

}else {
    console.log('this is not a char');
}

}

cal_age(x)