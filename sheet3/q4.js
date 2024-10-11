var x = (prompt("please enter the day  ")).toLowerCase()

function cal_age( y){
   

    if(y!="saturday" && y!="sunday"){
        console.log("its a weekday  ");
}else {
    console.log('its a weekend ');
}

}

cal_age(x)