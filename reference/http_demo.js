const http = require('http')
const path = require('path')
const fs = require('fs')

//create a server object:
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Home</h1>')
  } else if (req.url === '/about') {
    res.end('<h1>About Page</h1>')
  }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
)
