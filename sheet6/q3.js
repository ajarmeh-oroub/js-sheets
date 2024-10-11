var obj= { name: "Adam", age: 25 }
obj['gender']= "male"
for (const key in obj){
    console.log(obj[key]);
}