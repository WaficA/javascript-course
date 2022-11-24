"strict";
/*LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console */

function describeCountry(country, population, capitalCity) {
  const review = `${country} has ${population} Million people and its capital city is ${capitalCity}.`;
  return review;
}
let lebanonReview = describeCountry("Lebanon", "4", "Beruit");
let italyReview = describeCountry("Italy", "7", "Rome");
let egyptReview = describeCountry("Egypt", 80, "Cairo");
console.log(lebanonReview, italyReview, egyptReview);

/*LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations)
 
 */
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const portugal = percentageOfWorld1(10);
const china = percentageOfWorld1(1441);
const usa = percentageOfWorld1(332);
console.log(portugal, china, usa);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const lesotho = percentageOfWorld1(10);
const nigeria = percentageOfWorld1(1441);
const canada = percentageOfWorld1(332);
console.log(lesotho, nigeria, canada);

/*LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3' */

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const Portugall = percentageOfWorld3(10);
const Chinaa = percentageOfWorld3(1441);
const Usaa = percentageOfWorld3(332);
console.log(Portugall, Chinaa, Usaa);

/* LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice*/

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const strin = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(strin);
  return strin;
}
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("Usa", 332);
