// // datatype
// // number
// // String
// // Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'jons');

// javascriptIsFun = 'Yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year)
// console.log(typeof year)

// year = 1994;
// console.log(typeof year)

// console.log(typeof null)// bug and error this is a bug not clearly
// let canst and var

// let age = 30;
// age = 31;
// console.log(age)

// const birthYear = 1991;
// // birthYear = 1990;
// console.log(birthYear)

// var job = 'programmer'
// job = 'teacher'

// lastName = 'yuvraj'//creating veriable gloablely
// console.log(lastName);

//Challenge 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIjohn;
// console.log(BMIMark, BMIjohn, markHigherBMI);
/*
const firstName = 'yuvraj';
const job = 'programmer';
const birthYear = 1994;
const year = 2023;

const yuvi = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(yuvi);

const yuviNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(yuviNew)
console.log(`just a reguler string...`);
console.log('string with\n\
multiple\n\
lines');

console.log(`string
multiple
lines`) */
// const age = 17;
// if (age >= 18) {
//     console.log('sarah can start driving linces🚗')
// }
// else {
//     const yearLeft = 18 - age;
//     console.log(`sarah is to young wait another ${yearLeft} years`)
// }

// const birthYear = 1994;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

// Challene Number #2

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIjohn;
// console.log(BMIMark, BMIjohn)

// if (BMIMark > BMIjohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than john's (${BMIjohn})!`)
// } else {
//     console.log(`Mark's BMI(${BMIjohn}) is higher than john's (${BMIMark})!`)
// }

// type coversion - convert type ot one to another
// const inputYear = '1994';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Yuvraj'));
// console.log(typeof NaN);

// console.log(String(23), 23)

// //type coercion
// console.log('i am ' + 23 + ' years old')// covercion triger to + opreters

// 5 falsy values:0,'', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('yuvraj'));
// console.log(Boolean({}));
// const money = 100;
// if (money) {
//     console.log("Don't spend it all;")
// } else {
//     console.log("Ypu should get a job!");
// }

// let height = 0;
// if (height) {
//     console.log('YAY! height is defind');
// } else {
//     console.log('height is undfined');
// }

// 017 Equality Operators == vs. ===
// const age = '18';
// if (age === 18) console.log("you just become an adult :D (strict)");

// if (age == 18) console.log('you just became an adult :d (losse)');

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof (favourite));

// if (favourite === 23) {
//     console.log('Cool! 23 is amazig number!');
// } else if (favourite === 7) {
//     console.log('Cool! 7 is amazig number!');
// } else if (favourite === 9) {
//     console.log('Cool! 9 is amazig number!');
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log('what is 23?')

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// let A = hasDriversLicense;
// let B = hasGoodVision;
// console.log(A && B);
// console.log(A || B);
// console.log(!A);

// const shouldDriver = A && B;
// if (shouldDriver) {
//     console.log('sarah is able to driver!')
// } else {
//     console.log('someone else should driver...')
// }

// const isTired = false;// C
// let C = isTired;
// console.log(A && B && C)

// if (A && B && !C) {
//     console.log('sarah is able to drive!');
// } else {
//     console.log('someone else should drive...');
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scorekoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scorekoalas)
// if (scoreDolphins > scorekoalas) {
//     console.log('Dolphins win the trophy🏆');
// } else if (scorekoalas > scoreDolphins) {
//     console.log('Dolphins win the trophy🏆');
// } else if (scoreDolphins === scorekoalas) {
//     console.log('Both win the trophy!')
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scorekoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scorekoalas);

// if (scoreDolphins > scorekoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy🏆")
// } else if (scorekoalas > scoreDolphins && scorekoalas >= 100) {
//     console.log("kolaas win the trophy🏆")
// } else if (scoreDolphins === scorekoalas && scoreDolphins >= 100 && scorekoalas >= 100) {
//     console.log('both win the trophy!')
// } else {
//     console.log('no one wins the trophy')
// }

// switch conditions
// const day = "Saturday";

// switch (day) {
//     case 'Monday':
//         console.log('Plan course stucture');
//         console.log('Go to coding meetup');
//         break;
//     case "Tuesday":
//         console.log('prepare thery video');
//         break;
//     case "Wednesday":
//     case "Thursday":
//         console.log('write code examples');
//         break;
//     case "Friday":
//         console.log('record videos');
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log("Not a vail day!")
// }

// let day = prompt("Enter a day");

// if (day === 'Monday') {
//     console.log('Plan course stucture');
//     console.log('Go to coding meetup');
// } else if (day === 'Tuesday') {
//     console.log('prepare thery video');
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('write code examples');
// } else if (day === 'Friday') {
//     console.log('record videos');
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log("Not a vail day!")
// }

// Coding Challenge #4
const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value of bill ${bill + tip}`);