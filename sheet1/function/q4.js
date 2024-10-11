var r= "coding academy by orange"

function up(x){
    let result=x.split(' ')
    for(var i=0 ; i<result.length ;i++ ){
      result[i]=result[i].charAt(0).toUpperCase()+ result[i].substring(1)
    }
return result.join(' ')

}

console.log(up(r));
