
var num=7
let isPrime = true;
for(let i = 0 ; i<= num/2; i++){
    if(num%i==0){
      isPrime=false
        
    }
    
    if(isPrime){
        console.log("not a prime num");
    }else{
        console.log("a prime num");
    }
}