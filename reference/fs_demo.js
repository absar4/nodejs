const fs = require('fs')
const path = require('path')

// Create Folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//   if (err) throw err
//   console.log('Folder Created')
// })

// Create File and Write to it
// fs.writeFile(
//   path.join(__dirname, '/test', 'Hello.txt'),
//   'File Content',
//   (err) => {
//     if (err) throw err
//     console.log('File created and written to')
//   },
// )

// Add more content to file
// fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), ' Added', (err) => {
//   if (err) throw err
//   console.log('File append')
// })

// Read a file
// fs.readFile(
//   path.join(__dirname, '/test', 'Hello.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data)
//   },
// )

// Rename a file
// fs.rename(
//   path.join(__dirname, '/test', 'Hello.txt'),
//   path.join(__dirname, 'test', 'HelloWorld.txt'),
//   (err) => {
//     if (err) throw err
//     console.log('Renamed')
//   },
// )
