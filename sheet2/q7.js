

function addUp(x){
    if(x==0){
        return 0
    }
    return x+(addUp(x-1))
}

console.log(addUp(8)); 