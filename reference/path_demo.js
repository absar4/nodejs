const path = require('path')
// Full File Path
// console.log(__filename)

// // Only base name / file name
// console.log(path.basename(__filename))

// // only directory path
// console.log(path.dirname(__filename))

// // file extension
// console.log(path.extname(__filename))

// // Create Path Object
// console.log(path.parse(__filename))

// // Access Path object properties
// console.log(`Path Base ==> ${path.parse(__filename).base}`)
// console.log(`Path Directory ==> ${path.parse(__filename).dir}`)
// console.log(`Path Extension ==>${path.parse(__filename).ext}`)
// console.log(`Path Name ==> ${path.parse(__filename).name}`)
// console.log(`Path Root ==> ${path.parse(__filename).root}`)

// Joining Paths
console.log(path.join(__dirname, 'blog', 'article.html'))
