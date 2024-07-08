const accountId = 144553
let accountEmail = "vikas@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountFile;

// accountId = 2 // not allowed

/*Don't use var because it produce 
 issue in block and functional scope  */
accountEmail = "vikas@amazon.com"
accountPassword = "56789"
accountCity = "Rewari"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountFile])

