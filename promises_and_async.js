let fs = require('fs/promises');

//callback
fs.readFile("file.txt", "utf-8", (err, data) => {
    console.log(err, data);
});

//This will be executed first
console.log("This is eof");

//asynchronous operation
let a = fs.readFile("file.txt", "utf-8");

//Promise: It is an object that represents eventual completion of asynchronous operation and it resulting value
a.then((data) => {
    //Calling of asynchronous operation
    console.log(data);
});

//Async await: Make JavaScript kind of synchronous
const readThree = async (file1, file2, file3) => {
    let data1 = await fs.readFile(file1, "utf-8");
    let data2 = await fs.readFile(file2, "utf-8");
    let data3 = await fs.readFile(file3, "utf-8");
    console.log(data2);
    console.log(data1);
    console.log(data3);
};

readThree("file1.txt", "file2.txt", "file3.txt");