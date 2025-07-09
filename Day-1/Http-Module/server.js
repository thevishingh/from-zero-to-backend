const http = require("http");

// Create an HTTP server

const server = http.createServer((req, res) => {
  console.log("Request received:", req.method, req.url);
  //res.statusCode = 200;
  //res.setHeader("Content-Type", "text/plain");
  // WriteHead
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});
// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
