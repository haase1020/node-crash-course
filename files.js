const fs = require("fs"); //stands for file system in node

// to look into the file system:

// // reading files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString()); // buffer is a package of data
// });

// // console.log("last line"); // this will run first because the readFile has a cb function
// // writing files
// fs.writeFile("./docs/blog1.txt", " hello ninjas", () => {
//   console.log("file was written");
// });

// directories
// // first time will work, and then after will run error because file exists
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted!");
//   });
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted yahoo!");
  });
}
