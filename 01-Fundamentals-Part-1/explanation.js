/*
let js = "amazing";
console.log(40 + 8 - 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let year3 = 3;
let PI = 3.1415;


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
console.log(typeof undefined);


let age = 30;
age = 31;


const birth = 1991; // cannot be mutated
//birth = 1990;        return typeError

//const job;    return missing initializer



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2  ** 3 means 2 to the power of 3

const firstName = "Jonas";
const lastName = "tucker";
console.log(firstName + " " + lastName);

let x = 10 + 5;     //15
x += 10;    // x = x + 10
x *= 4;    // x = x * 4
x++;    // x = x + 1
x--;    // x = x - 1
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);       // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;  //x = y = 10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge)


const firstName = "Wafic";
const job = "manager";
const birthYear = 1989;
let year = 2022;

const wafic = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + ".";
console.log(wafic);

// template literals
const newWafic = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(newWafic);

console.log("multiple \n\
line \n\
string");

console.log(`multiple
line
string`);



const age = 15;
//control structure
if (age >= 18) {
    console.log("sarah can start driving liscene✌")
} else {
    const yearsLeft = 18 - age;
    console.log(`Wait another ${yearsLeft}`);
}


const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



// type convertion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 19);
console.log(Number("john"));        //will return nan
console.log(typeof NaN);
console.log(String(23));

// type coercion
console.log("I am " + 30 + " years old")
console.log("23" + 23 + "23");
console.log("23" - 23 - "23");
console.log("23" / 23);



//5 falsy values 0, "", undifined, null, NaN
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(undefined));
console.log(Boolean({}));       //object returns true

const money = 0;
if (money) {
    console.log("don't spend it all");
} else {
    console.log("you should get a job")
}


let height;     //sinse height is undefined, so its a fulsy value return the else
if (height) {
    console.log("it is defined");
} else {
    console.log("NOT DEFINED");
}


const age = "18";
if (age === 18) console.log("strict");
if (age == 18) console.log("loose");


const favourite = Number(prompt("Choose a number from 1 to 10?"));
console.log(favourite);
console.log(typeof favourite);


if (favourite === 9) {
    console.log("cool");
} else if (favourite === 7) {
    console.log("also cooool");
} else if (favourite === 5) {
    console.log("really cool");
} else {
    console.log("out of luck");
}


if (favourite !== 9) console.log("this is not the first block to be resolved");


// true and true = true  true and faulse = false
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);

//True or faulse = true
console.log(hasDriversLicense || hasGoodVision);

// NOT   does not have a driverlicense  
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive!")
} else {
    console.log("someone else should drive!!")
}

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("someone else should drive!!");
}

*/
/*

//conditional ternary operator
const age = 18;

age >= 18 ? console.log("i like wine") : console.log("i will have water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I would like to drink ${drink}`);
console.log(`I would like to drink ${age >= 18 ? "wine" : "water"}`);
*/
