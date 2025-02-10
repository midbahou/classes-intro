class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);


const cat2 = new SpottedTabby();
const cat3 = new SpottedTabby();
const cat4 = new SpottedTabby();

console.log(cat1.breed); // undefined
console.log(cat2.breed); // undefined
console.log(cat3.breed); // undefined
console.log(cat4.breed); // undefined

Object.getPrototypeOf(cat1).breed = "Tabby";

console.log(cat1.breed); // Tabby
console.log(cat2.breed); // Tabby
console.log(cat3.breed); // Tabby
console.log(cat4.breed); // Tabby

// New instance has the same prototype.
const cat5 = new SpottedTabby();
console.log(cat5.breed); // Tabby

// Setting this directly on this instance.
cat5.breed = "Tabby"; 

delete Object.getPrototypeOf(cat1).breed;

console.log(cat1.breed); // undefined
console.log(cat2.breed); // undefined
console.log(cat3.breed); // undefined
console.log(cat4.breed); // undefined
// We only deleted the prototype's value, 
// this instance still has its value.
console.log(cat5.breed); // Tabby



const commPrototype = {
    introduce() {
      console.log("Hey there, I don't have a name because I'm just an example, but nice to meet you!");
    }
};
  
const person = Object.create(commPrototype);
person.introduce(); // Hey there, I don't have a name because I'm just an example, but nice to meet you!


const commPrototype1 = {
    introduce() {
      console.log(`Hey there, I have a name now! I'm ${this.name}!`);
    }
};
  
function Person(name) {
  this.name = name;
}
  
Object.assign(Person.prototype, commPrototype1);
// or
// Person.prototype.introduce = commPrototype1.introduce;
  
const person1 = new Person("Leo");
person1.introduce(); // Hey there, I have a name now! I'm Leo!