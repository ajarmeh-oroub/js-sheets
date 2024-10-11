var x="orange"
function order(){
    let y = x.split("")
    y.sort()

    return y.join('')
}

console.log(order());