"use strict";
/*
//arrays basics
const friends = ["Bob", "john", "smith", "sarah"];
console.log(friends);
console.log(friends[2]);
console.log(friends[friends.length - 1]); //acessing last element
//another way of creating arrays
const years = new Array(1998, 1999, 2000, 2001, 2002);
const firstName = "Kaduru";
const lastName = "Bhargavi";
const birthYear = 1998;
const person = [firstName, lastName, 2021 - birthYear, "student", friends];
console.log(person);

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const byears = [1995, 1997, 1998, 2000, 2002];
const ages = [
  calcAge(byears[0]),
  calcAge(byears[2]),
  calcAge(byears[3]),
  calcAge(byears[byears.length - 1]),
];
console.log(ages);

//array methods
friends.push("williams"); //add last to array
friends.unshift("robert"); //add first to array
console.log(friends);

friends.pop(); //remove last element
friends.shift(); //remove first element
console.log(friends);

console.log(friends.indexOf("Bob")); //gives index ofthe element
console.log(friends.indexOf("smith"));

if (friends.includes("Bob")) {
  console.log("you have a friend bob");
}
//coding challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

/*
//intoduction to objects
const jonas = {
  firstName: "jonas",
  lastName: "schedmantan",
  age: 2021 - 1992,
  job: "teacher",
  friends: ["robert", "smith", "sarah"],
};
console.log(jonas);

//dot vs bracket notation
console.log(jonas.firstName);
console.log(jonas["firstName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}
*/
/*
//object methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(jonas.calcAge());
*/
/*
//coding challenge
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
}
*/
/*
//for-loop
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

//looping arrays
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
for (let i = 0; i <= jonas.length - 1; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1992, 2000, 2002, 1997, 1998];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
//looping backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
//loops in loop
for (let exe = 1; exe <= 4; exe++) {
  console.log(`-------- Starting exercise ${exe}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`Exercise ${exe}: Lifting weight repetition ${i}`);
  }
}

//while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
/*
//coding challenge
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
/*
//displaying the larger number
let num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log(`The larger of ${num1}  and  ${num2}  is  ${num1}.`);
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
  console.log(`The larger of ${num1}  and  ${num2}  is  ${num2}.`);
} else {
  console.log(`The values ${num1} and ${num2} are equal.`);
}
*/
