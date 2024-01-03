"use strict";
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, in born ${birthYear}`;
    console.log(output);

    if (birthYear >= 1990 && birthYear <= 2000) {
      var millenial = true;
      const str = `Hey!... ${firstName}, you'r a millenial.`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printAge();

  return age;
}
const firstName = "yuvraj";
calcAge(1994);
