var x = "Coding Academy by Orange "

function del(str) {
    let y = str.split(" ");
    let count = 0;

    for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < y[i].length; j++) { 
            if (y[i][j].toLowerCase() === 'o') {
                count++;
            }
        }
    }
    return count;
}


console.log(del(x));