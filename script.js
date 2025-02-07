const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
  }

const person2 = {
    name: {
      first: 'Elyan2',
      last: 'Kemble2',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
  }


function introduce() {
    console.log(this);
    
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }


  person.introduce = introduce
  person2.introduce = introduce
  introduce()

  console.log(person);

  person.introduce()
  person2.introduce()

  

  console.log("=========================");
  
  // Class Definition
    // class Animal {
    //   constructor(eyes, legs, isAwake, isMoving) {
    //       //obj.eyes = eyes
    //       this.eyes = eyes;
    //       this.legs = legs;
    //       this.isAwake = isAwake;
    //       this.isMoving = isMoving;
    //   }
    // }
  
  // Instance of a class
  // console.log(animal1);
  
  // const animals = [];
  
  // for (let i = 0; i < 100; i++) {
  //     const animal1 = new Animal(2, 4, true, false);
  //     animals.push(animal1)
  // }
  
  // console.log(animals);
  
  
  
  // Class Definition
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    //obj.eyes = eyes
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }

  toString() {
    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
  }
}

// Instance of a class
const cat1 = new Animal(2, 4, true, false);
console.log(cat1.eyes);

const cat2 = new Animal(2, 4, false, false);
console.log(cat2.legs);

const dog1 = new Animal(2, 4, true, true);
dog1.speak("huh");

const cow1 = new Animal(2, 4, true, false);
cow1.sit();
cow1.sleep()
console.log(cow1);


console.log(cat1.toString());
console.log(cat1);


//  =============== Cat Class =====================
class Cat extends Animal {
  constructor(eyes, legs, fur, isAwake, isMoving) {
      super(eyes, legs, isAwake, isMoving); // parent class
      this.fur = fur; // adding a new property to the object
  }

  speak() {
      super.speak("Meow...");
  }

  toString() {
      return super.toString("Cat");
  }

}

const newCat = new Cat(2, 4, "black", true, false);
console.log(newCat);

newCat.speak()


//  =============== Dog Class =====================
class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }

  speak() {
    super.speak("Woof!");
  }
  
  toString() {
      return super.toString("Dog");
  }
}

// Instance
const newDog = new Dog("yellow", true, true);
console.log(newDog);



//  =============== Cow Class =====================
class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}

const newCow = new Cow("black and white", false, false);
console.log(newCow);


// ==================== Human Class ==========================
console.log("==========================================");

class Human extends Animal {
  constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state,zip){
    super(2, 2, isAwake, isMoving);
    this.hair = hair;
    this.name = {
      first, // in JS if the parameter is the same name as the value we can write it like this (instead of first: first)
      last
    };
    this.age = age;
    this.occupation = occupation;
    this.location = {
      city: city,
      state: state,
      zip: zip
    }
  }

  introduce() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }
}

const person1 = new Human(true, true, "Black", "Paul", "Walker", 30, "Mechanic", "San Francisco", "CA", 10033);

console.log(person1);
person1.introduce();


class Developer extends Human {
  constructor(isAwake, isMoving, hair, first, last, age, occupation, city, state,zip, language, experience){
    super(isAwake, isMoving, hair, first, last, age, occupation, city, state,zip);
    this.language = language;
    this.experience = experience;
  }

  skills(){
    console.log(`I have ${this.experience} of experience, and I have these Skills: ${this.language}`);
  }
}

const dev1 = new Developer(true, true, "Black", "Mohamed", "Bahou", 30, "Junior Developer", "Albany", "NY", 12189, ['HTML', "CSS", "JavaScript", "React", "NodeJS"], "0-1 Year");

console.log(dev1);
dev1.introduce();
dev1.skills();



// Encapsulation
class Learner {
  #grades = [];
  #name = {
    first: '',
    last: '',
  }
  #age;

	constructor(firstName, lastName, age) {
		this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
	}

  // getters method: allows you to get the private property 
  get name(){
    return this.#name.first + " " + this.#name.last;
  }

  get age(){
    return this.#age;
  }

  // setter method
  set grades(grade){
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }

  // to get the value of grades you need to call a getter method
  get grades(){
    return this.#grades;
  }

  // instance method
  addGrades(...grades) {
    grades = grades.flat();

    grades.forEach(grade => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    })
  }

  // getting the average
  get average(){
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift(); // being nice taking out the lowest grade and don't count it in the average

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

// instance of the learner class 
const learner1 = new Learner('Leeroy', 'Jenkins', 18);

learner1.name = "paul" // you can't override the values with the getter method 
learner1.age = 25

console.log(learner1.name);
console.log(learner1.age);


// setting a new grade
learner1.grades = 80; // setter method
learner1.grades = 100;
learner1.grades = 70;

console.log(learner1);
console.log(learner1.grades); // you need the getter method so you can have this value shown

learner1.addGrades(98, 87, [95, 100, 77], [96,89]);
console.log(learner1.grades);


console.log(learner1.average);

