

function bankNotes(b){
    var x=[25, 10, 5, 1]
    let result ={}

    for(let note of x ){
     const count=   Math.floor( b /note)
if (count>0){
    result[note]=count
    b-=count*note
}
    }
    return result

}


console.log(bankNotes(57));