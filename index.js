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

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIjohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIjohn;
console.log(BMIMark, BMIjohn)

if (BMIMark > BMIjohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than john's (${BMIjohn})!`)
} else {
    console.log(`Mark's BMI(${BMIjohn}) is higher than john's (${BMIMark})!`)
} 