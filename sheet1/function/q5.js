var x="orange coding academy "

function up(y){
    let result= x.split(' ')
    for (var i=0 ; i<result.length; i++){
        result[i]=result[i].charAt(0).toUpperCase()+result[i].substring(1)
    }
    return result.join(' ')
}

console.log(up(x));