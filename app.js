// const personName = require("./names")
// const sayHi  = require("./utils")

// personName.names.map((name) => {
//     sayHi(name)
// })

// const fs = require("fs")

// fs.readFile("./first.txt", "utf-8", (err, result) => {
//     if(err) throw err
//     console.log(result)
// })

// fs.writeFile("./first.txt", "This is the next line", (err, data) => {
//     if(err) throw err
//     console.log("File written successfully...")
// })


const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        // res.write("Welcome to our home page")
        res.end("Welcome to our home page")
    }
    if(req.url === "/about") {
        res.write("Here is our short history")
        // res.end("Here is our short history")
        // res.end()
    }

    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `
    )

    
})

server.listen(3000)


