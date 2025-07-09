const fs = require("fs");
const path = require("path");

// sync Function to read a file and return its content

// Function to write data to a file
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data folder created at:", dataFolder);
}

// Function to write data to a file
const writeFile = path.join(dataFolder, "example.txt");
fs.writeFileSync(writeFile, "Hello, this is an example file content.", "utf8");
console.log("File written successfully at:", writeFile);

// Function to read data from a file
const readFile = fs.readFileSync(writeFile, "utf8");
console.log("File content:", readFile);

// function to append data to a file
const appendData = "what is node file system.??";
fs.appendFileSync(writeFile, `\n${appendData}`, "utf8");
console.log("Data appended successfully.");

// async way to creating file

const asyncWriteFile = path.join(dataFolder, "asyncExample.txt");
fs.writeFile(
    asyncWriteFile,
    "This is an async file write example.",
    "utf8",
    (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("Async file written successfully at:", asyncWriteFile);
        }
    }
);
