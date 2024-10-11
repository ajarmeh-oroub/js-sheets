var x ="orange"

function check(){
if (x.charAt(0)=='o'){
    console.log('the first yes ');
    if(x.charAt(x.length-1)=='o'){
        console.log('ok');
    }
else {
    console.log('the last one no ');
}}

}

console.log(check());