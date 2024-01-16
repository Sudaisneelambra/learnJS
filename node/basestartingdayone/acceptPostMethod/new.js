const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
http
  .createServer(function (request, response) {
    if (request.method == "GET" && request.url === "/signup") {
      fs.readFile("index.html", (error, data) => {
        if (error) {
          response.writeHead(404, { "Content-Type": "text/html" });
          response.write("Error Found");
          response.end();
        } else {
          response.writeHead(200, { "Content-type": "text/html" });
          response.write(data);
          response.end();
        }
      });
    } else if (request.method == "POST" && request.url === "/signupaction") {
      let body = [];
      
        request.on("data", (chunk) => {
          body.push(chunk);
        })
        request.on("end", () => {
          body = Buffer.concat(body).toString();
          const a = querystring.parse(body);
          console.log(a);
          response.write(body);
          response.end();
        });
    }
  })
  .listen(700);


