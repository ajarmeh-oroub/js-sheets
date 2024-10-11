var x= 2020

function check(d){
if (d%4==0 &&(d%100!=0 || d%400==0) ){
    console.log('the year is leap');

}else{
    console.log('the year is not leap ');
}

}

check(x)