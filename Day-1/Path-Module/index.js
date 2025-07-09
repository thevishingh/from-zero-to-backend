// what is path module in node.js
// The path module provides utilities for working with file and directory paths.

const path = require("path");

// Example usage
const filePath = path.join(__dirname, "example.txt");
console.log("File Path:", filePath);

// example of getting the directory name and base name of the current file
console.log("fileName", path.dirname(__filename));

console.log("fileName", path.basename(__filename));

// joint path example

const jointPath = path.join("/user", "documents", "file.txt");
console.log("Joint Path:", jointPath); // Output: "/user/documents/file.txt"

// resolving paths
const resolvedPath = path.resolve("documents", "file.txt");
console.log("Resolved Path:", resolvedPath);

// normalizing paths
const normalizedPath = path.normalize("/user//documents/../file.txt");
console.log("Normalized Path:", normalizedPath); // Output: "/user/file.txt"