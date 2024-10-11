var x=5
var y=9
var z=19


function check(a , b ,c){
    if(a==b && b==c){
        console.log('the triangle is Equilateral');
    }else if(a==b && b!=c ){
        console.log('the triangle is Isosceles ');

    }else {
        console.log('the triangle is Scalene');
    }
}


check(x,y,z)