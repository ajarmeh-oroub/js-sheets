var obj= { name: "Adam", age: 25, gender: "male" }

var s= Object.entries(obj)

for(const key in s){
    console.log(s[key]);
}

