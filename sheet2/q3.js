

function factorialize(num){
    if(num==-1){
        return -1
    }else if(num==1){
        return 1
    }

    return (num * factorialize(num - 1));
}

console.log(factorialize(8)); 