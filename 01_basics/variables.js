const accountId = 13454
let accountEmail = "abc@gamil.com"
var accountPassword = "12345"
accountcity = "Mumbai"
let accountState
//accountId = 2
 
console.log(accountId);

/*
Prefer not to use 'var'
because of issue in block scope and functional scope.
*/

accountEmail = "cdh@gmail.com"
accountPassword = "12345432"
accountcity ="jaipur"

console.table([accountId,accountEmail,accountPassword,accountcity,accountState],)