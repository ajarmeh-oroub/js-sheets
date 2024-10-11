var x = parseInt(prompt("please enter your year of birth "))

function cal_age( y){
    let r = 2024-y
    console.log(r);

    if(r<18){
        console.log("you may enter the kids program ");
}else if(r<30){
    if(r>=18)
    console.log("You are eligible. Start your application.");
}else if(r>=60){
    console.log("you can enter the seniors program");
}else {
    console.log('You are not eligible. You may join other programs');
}

}

cal_age(x)