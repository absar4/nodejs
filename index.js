// const Person = require('./person')

// const absar = new Person('Absar', 22, 'Developer')

// console.log(absar.about())

// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('message', (data) => {
//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       console.log(`# ${key} ===> ${data[key]}`)
//     }
//   }
// })

// logger.logs('Hello Learner', 'Absar', 'Developer')
// ========================================================
const http = require('http')
const path = require('path')
const fs = require('fs')

//create a server object:
const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err
  //       res.writeHead(200, { 'Content-Type': 'text/html' })
  //       res.end(content)
  //     },
  //   )
  // }
  // if (req.url === '/about') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //       if (err) throw err
  //       res.writeHead(200, { 'Content-Type': 'text/html' })
  //       res.end(content)
  //     },
  //   )
  // }

  // if (req.url === '/api/users') {
  //   // Dummy Data
  //   const users = [
  //     {
  //       name: 'Absar',
  //       job: 'Developer',
  //     },
  //     {
  //       name: 'Humayun',
  //       job: 'Designer',
  //     },
  //   ]
  //   res.writeHead(200, { 'Content-Type': 'application/json' })
  //   res.end(JSON.stringify(users))
  // }

  // File Path:
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url,
  )

  // Extension of a file
  let extName = path.extname(filePath)

  // Initial Content Type
  let contentType = 'text/html'

  // Check extName and set contentType:
  switch (extName) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case '.json':
      contentType = 'text/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // PAGE NOT FOUND
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content, 'utf-8')
          },
        )
      } else {
        // Some Server Error:
        res.writeHead(500)
        res.end(`Some Server Error: ${err.code}`)
      }
    } else {
      // SUCCESS
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
)
