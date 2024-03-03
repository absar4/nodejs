const url = require('url')

const myWeb = new URL(
  'https://absar4.github.io/absarmern?year=2024&month=april',
)

// Serialized or Complete URL
// Way#1
// console.log(myWeb.href)
// Way#2
// console.log(myWeb.toString())

// Host (root domain)
// console.log(`Host = ${myWeb.host}`)

// // Host Name (doesn't get port)
// console.log(`Host Name = ${myWeb.hostname}`)

// // Pathname
// console.log(`Path Name = ${myWeb.pathname}`)

// Serialized / Complete Query Parameter:
console.log(myWeb.search)

// Query Parameters in an Object:
console.log(myWeb.searchParams)

// Add Params Dynamically:
myWeb.searchParams.append('age', 22)
console.log(myWeb.searchParams)

// Loop through the Parameters:
const parameters = myWeb.searchParams
// Log the values
parameters.forEach(function (value, key) {
  console.log(`${key} -----> ${value}`)
})
