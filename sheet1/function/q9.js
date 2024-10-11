var x ="lora"
var y = "inge"
function link(){
    let r= x.charAt(0)
    let d= y.charAt(0)

    let n= x.replace(r,"") + y.replace(d,"")
    return n

}

console.log(link());