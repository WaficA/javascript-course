"strict";
/* Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK �
*/

const CalcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = CalcAverage(44, 23, 71);
let scoreKoalas = CalcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `"Dolphin win (${avgDolphins} vs ${avgKoalas})"`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `"Kowalas win (${avgKoalas} vs ${avgDolphins})"`;
  } else {
    return `No One Wins!`;
  }
}
checkWinner(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = CalcAverage(85, 54, 41);
scoreKoalas = CalcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `"Dolphin win (${avgDolphins} vs ${avgKoalas})"`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `"Kowalas win (${avgKoalas} vs ${avgDolphins})"`;
  } else {
    return `No One Wins!`;
  }
}
checkWinner(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));

/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */
