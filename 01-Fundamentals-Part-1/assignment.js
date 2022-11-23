/*
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console*/

const country = "Sierraleone";
const continent = "Africa";
let population = 7;
const language = "English";
const isIsland = false;
//isIsland = false;
console.log(country);
console.log(continent);
console.log(population);
//data type

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
//basic oprators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " people speak " +
  language;
console.log(description1);

//Assignment strings and template literals
//Assignment Taking Decisions if/else Statments

const descriptionLiteral = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(descriptionLiteral);

//taking desitions if/else statments
const sum = 33 - population;
if (population > 33) {
  console.log(`${country} population is above average`);
} else {
  console.log(`${country}'s population is ${sum} million below average`);
}

//Assignment Type Conversion and coercion

let x = "9" - "5"; //4
let y = "19" - "13" + "17"; //617
let m = "19" - "13" + 17; //23
let f = "123" < 57; //false
let o = 5 + 6 + "4" + 9 - 4 - 2; //1143
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
console.log(x, y, m, f, o);

//Assignment Equality Operators

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No boarder's!");
}

//Assignment Logigal Operator

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}!!`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

//Assingment Switch Statment

const foreignlanguage = prompt("Choose your language");
switch (foreignlanguage) {
  case "chinease":
    console.log("most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers!");
    break;
  case "english":
    console.log("3rd place!");
    break;
  case "hindu":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language!!");
    break;
  default:
    console.log("You can not apply for this job!");
}

//Assignment The Conditional (ternany) oprator

population > 33 ? "population is above average" : "population is below average";
console.log(
  population > 33
    ? "population is above average"
    : "population is below average"
);

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
