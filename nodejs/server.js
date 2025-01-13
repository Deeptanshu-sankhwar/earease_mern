// I will try to create the server using the http npm package
// Library: A library is a published code on the internet which already has hige functions so that we don't need to write them again.

// Install a package/library: npm i <package-name>

// IP address of local mahine is always 127.0.0.1

// export the http package so we can use its functions
const http = require('http');   // npm i http

let displayValue = 0;

// configuring my sever
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    displayValue = displayValue + 2
    res.end(`${displayValue}`)
})

// start the server or start listening server on a given port
server.listen(4123, () => console.log("connected to the server"))

// When I hit node server.js, it starts the server at 127.0.0.1:4123

// Response Status Codes
// 200: OK
// 201: Successfully inserted
// 404: Request not found
// 401: Not authorized
// 500: Internal Server Error