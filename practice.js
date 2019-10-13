// // Object oriented Programming in JavaScript

// // OOP pragramming, Style of pragramming that revolves around working
// // with objects

// // Procedural Programming that revolves around just working
// // with a bunch of functions that have most of their operations within
// // a function

// //OOP group of related variables and functions are within an object
// // This is actually called encapsulation

// // "Using this. " is when youre within an object or within a constructor
// // and you have a function or method call within the constructor or object
// // That wants to address the variable that is declared within the constructor
// // or Object

// // Abstraction
// // All inner complexities are hidden from the user, the user
// // just needs to run execution
// //  Good when we have changes. reduces the impact of change

// //inheritance
// //Mechanism that allows you to prevent writing redundant code

// // polymorphisim
// // many forms, that allow you to get rid of long if and else and
// // switch and case statements


// // Creating an object  
// const circle ={
//     radius:1,
//     location:{
//         x:1,
//         y:2
//     },
//     draw:function(){
//         console.log("This is a circle");
//     }
// }

// //  circle.draw();

// //If an object has one or more methods, we say that the object has Behaviour
// // if you're going to be creating multiple instances of an object
// // That has many functions and other stuff you may or may not need for 
// // all your objects, create a factory pattern

// // Remember the inner components of a object is always under the form
// // Key:Value (Draw: Function)


// function CreateCircle () {
//     const circle ={
//         radius:1,
//         draw: function(){
//             console.log("You've drawn a circle" );
//         }
//     }
// }

// // Lets find a better way to improve the code from above
// // you're placing it within a function so its better to just 
// // return the object declared within it
// // Factory Function, a function that has an object, without the whole
// // object declaration

// function CreateACircle() {
//     return {
//         radius: 1,
//         draw: function(){
//             console.log("You've drawn a circle a more improved way" + this.radius);
//         }
//     }
// } 


// let x = CreateACircle();
// x.draw();

// // Another Example of a factory pattern, with an argument declared 
// // in the function signature
// // For some Reason this. can be removed without breaking rhe code
// // not for the exaple above

// function CreateASquare(radius){
// return{
//     radius,
//     draw:function(){
//         console.log('Draw a radius of ' + this.radius);
//     }
// }
// }

// let mySquare = CreateASquare(10);
// mySquare.draw();


// // Lets create a constructor First Letter Shuold Be Uppercase
// // THis  is another way to create an object essentially
// // this is a reference to the object that we will be using
// // For a constructor when we instantiate it we need to use the new
// // operator, when we use a new operator, what happens is that it sets
// // this operator to point to that object you just instantiated using new
// // finally it will return that object from the constructor function
 
// // A factory function uses a return Statement, does not use the 
// // new function instantiation
// // A constructor function does not have a return statement, does not
// // have to use the keyword Constructor, and uses this. when creting a variable and function inside of it
// //, and uses new when you instatntiae a new object

// //Constructor
// function Circle (radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("The Radius is " + radius );
//     }
// }

// anotherCircle = new Circle(2);
// anotherCircle.draw();

// // Every Function is actually an object in Javascript

// // primitives are copied by value
// // objects are coped by their reference  

// // Small Example of how what happens inside a function scope
// // is only part of that function scope not outside
// // Hence though they have the same name, but change is only applied 
// // To the variable inside not the one outside, They are different
// let number = 20;

// function increase(number){
//     number++
// }

// console.log(number);
 

// // Objets are dynamic (can add / delete propertries )
// // after you have already created it

// function CreateTriangle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("This is a triangle with radius " + radius);
//     }
// }

// myTrianlge = new CreateTriangle(13) 
// myTrianlge.draw()

// // add a new property to an existing object
// myTrianlge.area = { bh:244};
// console.log(myTrianlge)

// // Get all the keys of an object, will return an array of the keys 
// const keys = Object.keys(myTrianlge);
// console.log(keys);

// // Checking to see if an object has a certain key
// if (this.radius in CreateTriangle){
//     console.log("The triangle has a radius");
// }


// // You can also have inner variables inside of a constructor function
// // so intead of using this.color = color, you can have a variable 
// // let color, and this will NOT be seen outside of its scope (function)
// // helpful to have inner operations within the function


// // private properties and methods
// // When We only have things declared as this.variable or function
// // this is essentially making it public, inorder to make it private
// // and only accessible to that function or constructor, we need to 
// // assign it to a variable 
// // to address the member variables within the constructor use this.


// //Lets say you really want access to the private member variables and functions
// // thats where you will use getter and setters
//   function PrivateCircle(radius){
//       this.radius = radius;
//       let defaultLocation =  {x:0,y:2};
//       let computeLocation = function (factor){
//           console.log("lets factor" + factor);
//       }
//       this.draw = function(){
//           console.log("The Current Radius is " + this.radius);
//       }
//       this.getLocation = function(){
//           return defaultLocation; 
//       }
      
//   }

//   const myCir = new PrivateCircle(12);
//   console.log("the Radius of the triangle is " +myCir.radius)

//   console.log(myCir.getLocation());

  // Watch the Remainder OOP video to understand getters and setters starts at 50:00


  // Classes

// class Student {
//     constructor(name, id,){
//         this.name = name;
//         this.id = id;
//     }

//     getName(){
//         return this.name;
//     }

//     getId(){
//         return this.id;
//     }

//     setName(name){
//         this.name = name;
//     }

//     setId(id){
//         this.id = id
//     }
// }

// studentOne = new Student("Mike", 233);
// console.log(studentOne.getName());
// studentOne.setName("connor");
// console.log(studentOne.getName());

// Without Classes (using Function)

// function Student(name,id){
//     this.name = name;
//     this.id = id;
// }

// Student.prototype.getName = function getName(){
//     return this.name;
// }

// Student.prototype.setName = function setName(name){
//     this.name = name;
// }

// studentOne = new Student("Mike Ross", 2333);
// console.log(studentOne.getName());

// studentOne.setName("John Locke");
// let studentOneName = studentOne.getName();
// console.log(studentOneName);
