const isurl = require("../index.js")

console.log(isurl("http://localhost")) // false
console.log(isurl("http://localhost:9000")) // false
console.log(isurl("http://localhost.com")) // true
console.log(isurl("http://localhost.com:9000")) // true
console.log(isurl("http://www.localhost.com")) // true
console.log(isurl("http://www.localhost.com:9000")) // true
console.log(isurl("https://localhost")) // false
console.log(isurl("https://localhost:9000")) // false
console.log(isurl("https://localhost.com")) // true
console.log(isurl("https://localhost.com:9000")) // true
console.log(isurl("https://www.localhost.com")) // true
console.log(isurl("https://www.localhost.com:9000")) // true

