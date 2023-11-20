//activating Scrict mode
'use strict';

//Function
// function logger() {
//     console.log(`my name is yuvraj`);
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const applesJuice = fruitProcessor(10, 2);
// console.log(applesJuice);

// function conNumToStr(num) {
//     let conToNum = Number(num);
//     console.log(`${num} this str covert to this number ${conToNum}`);
//     return conToNum
// }
// console.log(typeof (conNumToStr('23')));
/*
// Function Declarations
function calcAge(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge(1994);
// console.log(age1)

//Function Expressions
const calcAge1 = function calcAge2(birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge1(1994)
console.log(age1, age2);
*/
/* Arrow Function */
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return `${firstName} retires in ${retirement} years!`
// }
// console.log(yearUntilRetirement(1994, 'Yuvraj'));
// console.log(yearUntilRetirement(1999, 'sid'));

/*Function calling other Function*/
// function cutFruitPicess(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applesPicess = cutFruitPicess(apples);
//     const orangesPicess = cutFruitPicess(oranges);
//     const juice = `Juice with ${applesPicess} apples picces and ${orangesPicess} oranges picess sheak well`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(1, 2, 3));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scorekoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scorekoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log('Dolphins win');
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log('kolas win');
//     } else {
//         console.log('No win');
//     }
// }
// checkWinner(scoreDolphins, scorekoalas);
// checkWinner(11, 22);
// checkWinner(44, 22);

// //test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scorekoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scorekoalas)
// checkWinner(scoreDolphins, scorekoalas)

// Array
// const frineds = ['yuvi', 'sid', 'rushi']
// console.log(frineds);

// const years = new Array(1994, 1999, 1998);
// console.log(years);
// console.log(frineds[0]);
// console.log(frineds[2]);
// console.log(frineds.length);
// console.log(frineds[frineds.length - 1]);
// frineds[2] = "rushikesh"
// console.log(frineds);

// const firstName = 'yuvi';
// const yuvi = [firstName, 'Bagale', 2023 - 1994, 'Programmer', frineds];
// console.log(yuvi);
// console.log(yuvi[4][3])

//Exercise

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// let ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)

//Basic methods of Array
// const frineds = ['Michael', 'steven', 'Peter']

// //Add element
// const newLenght = frineds.push('jay')
// console.log(frineds);
// console.log(newLenght);

// frineds.unshift('jay');
// console.log(frineds);

// // remove elements
// frineds.pop();//last
// const popped = frineds.pop();
// console.log(popped);
// console.log(frineds);

// //remove frist element in the array
// frineds.shift();
// console.log(frineds);

// //which position in the array
// console.log(frineds.indexOf('steven'));

// //ES6 element includes
// frineds.push(23)
// console.log(frineds.includes('steven'));
// console.log(frineds.includes('Bob'));
// console.log(frineds.includes(23));

// if (frineds.includes('steven')) {
//     console.log(`frined name is  ${frineds[0]}`)s
// }

//Coding challenges 2
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // console.log(bills, tips)

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// const jonas = {
//     fristName: 'jonas',
//     lastName: 'Bagale',
//     age: 2023 - 1994,
//     job: 'Programmer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const namekey = 'Name';
// console.log(jonas['first' + namekey]);
// console.log(jonas['last' + namekey]);

// // console.log(jonas.'last' + namekey);

// const interestedIn = prompt('what do you want to know about Jonas? choose between firstName, lastName, age job, and friends');
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong Attemp! use this options firstName, lastName, age job, and friends')
// }
// jonas.location = 'Pune';
// jonas['twitter'] = '@yuvrajbagele';
// console.log(jonas);

// //Challennge
// //"Jonas has 3 friends , and his best friend is called Michael"
// console.log(`${jonas.fristName} has ${jonas.friends.length} friends, and his best frined is called as ${jonas.friends[0]}`); 

const jonas = {
    fristName: 'jonas',
    lastName: 'Bagale',
    birthYear: 1994,
    job: 'Programmer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.fristName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense} 'a':'no' drivers licenes.`
    }
};
console.log(jonas.calcAge());
console.log(jonas.age);

//Challenge
// jonas is 46-year old teachers, and hi has drivers lincesce

console.log(jonas.getSummary()); 