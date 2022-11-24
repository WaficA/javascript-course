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
