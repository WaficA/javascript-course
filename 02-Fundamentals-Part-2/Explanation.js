"strict";

function logger() {
  console.log("call this funtion");
}
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

//reviewing function

function calcAge(birthYear) {
  return 2037 - birthYear;
}

function yearUntillRetirment(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirment = 65 - age;
  console.log(`${firstName} retires in ${retirment} years`);

  if (retirment > 0) {
    console.log(`${firstName} retires in ${retirment} years`);
    return retirment;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearUntillRetirment(1991, "jonas"));
console.log(yearUntillRetirment(1950, "mike"));

//function calling other function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function NewFruitProcessor(apples, oranges) {
  const applePiece = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePiece} pieces of apples ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(NewFruitProcessor(2, 3));

//arrays
/*
const newFriends = new Array("thomas", "victor", "tria"); // another way (just for info)
console.log(newFriends);
console.log(typeof newFriends); */

const friends = ["micheal", "steven", "peter"]; // use this
console.log(friends);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const firstName = "jonas";
const jonas = [firstName, "davis", 2037 - 1992, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

//exercise
const calcAge4 = function (birthYear4) {
  return 2037 - birthYear4;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4(years[0]);
const age5 = calcAge4(years[1]);
const age6 = calcAge4(years[years.length - 1]);
console.log(age4, age5, age6);

const ages = [
  calcAge4(years[0]),
  calcAge4(years[1]),
  calcAge4(years[years.length - 1]),
];
console.log(ages);

const friends2 = ["Natasha", "thor", "harry"];

//add element to begining of array
friends2.unshift("john");
console.log(friends2);

//remove from begining of array
friends2.shift();
console.log(friends);

//add element to the end of array
const newLength = friends2.push("thomas");
console.log(friends2);
console.log(newLength);

//remove element from end
const popped = friends2.pop();
console.log(popped);
console.log(friends2);

// if -1 thats is not found
console.log(friends2.indexOf("Natasha"));
// will return true or false if ound not found
console.log(friends2.includes("bob"));
console.log(friends2.includes("Natasha"));

if (friends2.includes("Natasha")) {
  console.log("you have a friend called Natasha");
}

//introduction to objects
const jonass = {
  firstName: "jonas",
  lastName: "schmedtmann",
  age5: 2037 - 1991,
  job: "teacher",
  friends3: ["peter", "marry", "paul"],
};

// dot vs bracket notation

console.log(jonass.firstName);
console.log(jonass["firstName"]);

const num = "5";
console.log(jonass["age" + num]);

const interested = prompt(
  "what are you intrested in knowing? choose between firstName, lastName, age5, job, and friends3"
);

if (jonass[interested]) {
  console.log(jonass[interested]);
} else {
  console.log("undifined entry!!");
}

jonass.location = "city";
jonass["website"] = "jonas.com";
console.log(jonass);

//"jonas has 3 friends, and his best friend is called micheal"
console.log(
  `${jonas.firstName} has ${jonass.friends3.length} friends, and his best friend is called ${jonass.friends3[0]} `
);

const eva = {
  firstName: "eva",
  lastName: "jones",
  birthYear: 1991,
  job: "nurse",
  friends3: ["amber", "marry", "paul"],
  hasDriverLiscene: false,

  //calcAge: function{
  //return 2037 - this.birthYear}

  calcAge50: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge50()}-years old ${
      eva.job
    }, and she has ${this.hasDriverLiscene ? "a" : "no"} drivers license`;
  },
};

console.log(eva.calcAge50());
console.log(eva.age);

//"eva is a 46-years old teacher, and she has a  drivers license"

console.log(eva.getSummary());
