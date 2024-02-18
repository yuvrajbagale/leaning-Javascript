const accountId=15554;
let accountEmail='yuvrajbagale@gmial.com';
var accountPassword='123450';
accountCity ='Pune';

// accountId=3  not allowed 

accountEmail = "akshaybagale@gmail.com";
accountPassword="123"
accountCity='Mumbai';
let accountStatus; 

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus]);

/*
prefer not to used var
because of issue in block scope and functional scope
*/

// if we have not assined variable value javascript print undefined