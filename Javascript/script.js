// Output

//String 
console.log("Hello World") 

//Numbers
console.log(42) 
console.log(42.514) 

//Calculation
console.log(5+7) 
console.log(5-4) 
console.log(12/2) 
console.log(5*3) 

//Booleans
console.log(true) 
console.log(false) 

// Null
console.log(null) 

// Variables

const phrase = "Hello World"// constable dooesn't change
console.log(phrase)

let phrase2 = "Hello World" // with let the variable changes
console.log(phrase2)

phrase2 =  "Goodby World"
console.log(phrase2)

const myresult = 100+20
console.log(myresult)

const a = 5
const b = 10
const c = a + b
console.log( c )

// String Concatenation
const FirstName = "Chris"
const LastName = "Galanis"

console.log(FirstName + " "+ LastName)

// String Interpolation

const greeting = `Hello, there, my name is ${FirstName} ${LastName}`

console.log(greeting)

//  Array ( a list of things)
const list =  ["Bread", "Milk", "Coffee"]
console.log(list)
// First Index of list
console.log(list[0])
// Second Index of list
console.log(list[1])
// Third Index of list
console.log(list[2])

//Length
console.log(list.length)

// Objects (Grouping same items)
const name = "Chris"
const Colour = "Orange"

// const name = "Ed"
// const Colour = "Red" 
// !ERROR! same variables
// So with objects we can group them
const chris ={
    name:"Chris",
    colour:"orange",
    age:17
}
const ed ={
    name:"Ed",
    colour:"red",
    age:25
}

console.log(chris.name, chris.colour, chris.age)
console.log(ed.name, ed.colour, ed.age)

chris.profession = "Programmer"
console.log(chris.profession)

ed.favGames = ["Apex Legends","Pathfinders"]
console.log(ed.favGames)

// if statements - conditions

if(true){
    console.log("Something is true")
}
else{
    console.log("Something is false")
}

if( name === "Chris"){
    console.log("Yes");
}
else{
    console.log("No");
}

if ( 5 > 10){
    console.log("5 is more than 10");
}
else{
    console.log("5 is less than 10");
}

// Looops

// initialiser, condition, finaliser
for(let  i = 0;  i<100;  i++){
    console.log(1);
}

const hobbies = ["Chess", "Programming", "D&D", "Music"]

for(let i=0; i<hobbies.length; i++){
    console.log(hobbies[i]);
}

// Function

function sayHello(){
    const message = "Hello World"
    console.log(message);
}

sayHello()

function greet(Name){
    console.log(`Hello ${Name}`)
}
greet("Chris")

function sum(number1, number2){
    return number1 + number2
}
console.log(sum(5,10));

// Array Functions - Methods

 const array = ["Eva", "Chris", "Louis" , "Andrew"]
 console.log(array);

 array.sort()
 console.log(Array);

 array.push("James")
 console.log(array);

 function makeUppercase(name){
    return name.toUpperCase()
 }

const newArray = array.map(makeUppercase)
 console.log(newArray);

//  Dom
 const helloDiv = document.querySelector(".hello")

 helloDiv.innerText = 'Goodbye, world!'

 // EventListener 

 const button = document.querySelector('#btn')

 function BtnClick(){
    //  Changes in CSS
    button.classList.add("red")
 }

 button.addEventListener('click', BtnClick)
 