var protein=['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'] 
var grain =['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
var vegetable=['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
var beverage=['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'] 
var dessert =['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'] 


// for(let i = 0 ; i<protein.length ; i++){
//     for(let j =0; j<=i ;j++){
//         for(let x=0; x<=j;x++){
//             for(let y =0; y<=x ;y++){
//                 for(let z =0; z<=y ;z++){
//                     console.log(protein[i] +" "+ grain[j]+" "+ vegetable[x]+" "+ beverage[y] +" "+ dessert[z]);
        
//                 }
//             }
//         }
//     }
// }/////////this gonna print all the possible combinations 




function meal(numberOfMeals){
let meals=new Set()

while (meals.size < numberOfMeals) {
    const mealss = [
        protein[Math.floor(Math.random() * protein.length)],
        grain[Math.floor(Math.random() * grain.length)],
        vegetable[Math.floor(Math.random() * vegetable.length)],
        beverage[Math.floor(Math.random() * beverage.length)],
        dessert[Math.floor(Math.random() * dessert.length)]
    ].join(" "); 

    meals.add(mealss); 
}
return Array.from(meals);////converting the set into an array 


}


const numberOfMeals = 10;
const meals = meal(numberOfMeals);
console.log(meals);