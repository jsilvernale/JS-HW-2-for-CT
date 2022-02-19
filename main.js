/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}





function favFoods(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        if(Array.isArray(Object.values(person)[i])){
            console.log(Object.values(person)[i])
        }else{
            console.log(Object.values(person)[i])
        }
    }
}

favFoods(person3)


/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;          
    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old.`);
    }
    this.addOneToAge = () => {
        console.log(this.age++)
    }
}


let janet = new Person('Janet', 36)
let josh = new Person('Josh', 32)
console.log(josh.printInfo())
console.log(josh.addOneToAge())
console.log(josh.printInfo())
console.log(josh.addOneToAge())
console.log(josh.printInfo())
console.log(josh.addOneToAge())
console.log(josh.printInfo())
console.log(janet.printInfo())


/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const strLength = (string) =>{
    return new Promise( (resolve, reject) => {
        if (string.length > 10){
            resolve(true)
        }else {
            reject(false)
        }
    })
}

strLength('Hello, Josh')

.then((result) => {
    console.log(`Big Word`)
})
.catch((error) =>{
    console.log(`Small Word`)
})