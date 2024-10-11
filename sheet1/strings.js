var x="Welcome to Orange"

// console.log(x.toUpperCase());

// console.log(x.slice(8,10).toUpperCase());

// console.log(x.replace('Welcome','Hello'));

// console.log(x.toLowerCase());

// console.log(x.length);

// console.log('welcome to "orange"');

// console.log(x+" jordan");
// var first_letter=x[0]


////////////////////////q2///////////////////////
var first_letter=x[0]
var f=x.split("")

for(var i=1 ; i<x.length ; i++){

    if(first_letter==f[i]){
        f[i]='*';
    }
    
}

x=f.join('');
console.log(x);
