var x = parseInt(prompt("please enter your year of birth "))

function cal_age( r){
  

    if(r>18 && r<65){
        console.log("u r of working age ");
}else {
    console.log('You cant work ');
}

}

cal_age(x)