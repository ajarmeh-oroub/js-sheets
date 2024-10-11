var x=parseInt(prompt("please chose a number between 1 and 9"))

function check(y){
    if (1<= y && y<=9){
        console.log('its within the range ');
    }else{
        console.log('the num is out of the given range ');
    }
}


check(x)