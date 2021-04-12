// FileSummarizer.js
"use strict";

const fs = require("fs");

function summarizeFilesInDirectorySync(directory) {
    return fs.readdirSync(directory).map((fileName) => ({
        directory,
        fileName
    }));
}

let dir = summarizeFilesInDirectorySync("d:");
console.log("dir", dir);
