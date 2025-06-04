const accountId = 14453
let accountEmail = "laveshparyani@gmail.com"
var accountPassword = "190803"
accountCity = "Mumbai"
let accountState

// accountId = 2    //not allowed
accountEmail = "laveshparyani01@gmail.com"
accountPassword = "lavesh@190803"
accountCity = "Surat"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])