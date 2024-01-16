const fs=require("node:fs")

const zlib=require("node:zlib")

const gzip=zlib.createGzip()

const readableStream=fs.createReadStream("./new.txt",
{
    encoding:"utf-8"
})

readableStream.pipe(gzip).pipe(fs.writableStream("./new1.txt.gz"))

const writableStream=fs.createWriteStream("./new1.txt")

readableStream.pipe(writableStream)























// gpt

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();
// const readableStream = fs.createReadStream("./new.txt", { encoding: "utf-8" });

// const writableStreamGzip = fs.createWriteStream("./new1.txt.gz");
// readableStream.pipe(gzip).pipe(writableStreamGzip);

// const writableStream = fs.createWriteStream("./new1.txt");
// readableStream.pipe(writableStream);

// // Optional: Handle events for both writable streams
// writableStreamGzip.on("finish", () => {
//   console.log("Gzip write operation completed successfully.");
// });

// writableStreamGzip.on("error", (err) => {
//   console.error("Error writing to gzip stream:", err);
// });

// writableStream.on("finish", () => {
//   console.log("Write operation completed successfully.");
// });

// writableStream.on("error", (err) => {
//   console.error("Error writing to stream:", err);
// });
