const accountId = 1234;
let accountEmail= "Chayan@gamilcom";
var password = "3454";
accountCity = "Dhaka"; //Possible decleare data types like this but not preferable.
let state; //undefined,

// accountId = 45; you can't reassign in const value;
accountEmail="chayan4545";
password=4545;
accountCity="Mymensingh";
console.log(accountId);
console.table([accountId,accountEmail,password,accountCity,state]);

/*
Prefer not to user var 
because of issue in block scope and functional scope.
*/