const accountId = 144553
let accountEmail = "Sanidhey@google.com"
var accountPassword = "12345"
accountCity = "jaipur"


//accountId = 2 // not allowed

accountEmail = "ss@ss.com"
accountPassword = "4445648"


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId ,accountPassword, accountCity])
