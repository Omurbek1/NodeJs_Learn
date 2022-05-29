const os = require("os")
const greeting = require('./greeting')
let userName = os.userInfo().username;
console.log(userName)
console.log(`Суралган кун:${greeting.date}`);
console.log(greeting.getMessage(userName));