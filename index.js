const http = require('http');
const fs = require('fs');

const errorHtml = fs.readFileSync("assets/pages/error.html");

const sendFile = (path, response) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.end(errorHtml);
            return
        }
        response.end(data);
    })
}


const server = http.createServer((request, response) => {
    console.log("new request", request.method, request.url)
    if (request.url === "/") {
        sendFile("assets/pages/index.html", response)
    }

    else {
        const filePath = "assets" + request.url //pages/images/table.png
        sendFile(filePath, response)
    }
})

const PORT = 9000;
server.listen(PORT, () => {
    console.log("listening on port ", PORT)
})