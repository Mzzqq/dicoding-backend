const http = require("http")

const requestListener = (request, response) => {
    response.setHeader("Content-Type", "text/html")
    response.statusCode = 200

    const {method} = request

    if(method == "GET") {
        response.end("<h1>Hello</h1>")
    }

    if(method == "PUT") {
        response.end("<h1>Bonjour</h1>")
    }

    if(method == "DELETE") {
        response.end("<h1>Salam</h1>")
    }
}

