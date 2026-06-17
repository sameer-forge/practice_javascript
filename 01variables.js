const accountId = 3450 
let accountEmail = "sameer@google.com"
var accountPassword ="12345"
accountCity = "delhi"
let accountState;

accountEmail = "sameerforge.com"
accountPassword = "569"
accountCity = "jaipur"

console.log(accountId);

/* prefer not to use var
becouse of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState] )