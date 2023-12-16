const fs = require("fs");

let fileToBeRead = "data.txt";
let encoding = "utf-8";

fs.readFile(fileToBeRead, encoding, function(err, data) {
if (err) {
console.log('Unable to read file: ${err}');
} else {
console.log('File contents: ${data}');
}
});



for (let i = 0; i <= 10000000000; i++) {}
console.log("Done with loop!");

// FYKI data.txt has below contents:
// Hello! How are you doing?

// Output:

// bash-3.2$ node readFileContents.js 
// Done with loop!
// Data read from the file: Hello! How are you doing?

// Learnings:

// There are Web APIs provided by browsers to handle the asynchronous tasks,
// fs.readFile is one of them. As the JavaScript(JS) thread reaches an async task,
// it gets delegated to browser's Web APIs for execution & the JS thread continues to
// execute next synchronous tasks. For example, here we are reading a file, 
// this task can take time. The file that we want to read,
// it could be locked by some other process, which might be doing some task on 
// a file like writing to it. So OS has to wait till the file is unlocked, then 
// may be it will check if we have read permissions of the file. I am just trying
// to paint a picture here. These kind of tasks which can take time, has to be 
// Asynchronous. So, once we have read the file & fs.readFile is ready
// to execute the function in it's body, it will move from Web APIs execution space
// to CallbackQueue where in it will wait to go into the CallStack. Once the JS
// thread is free, EventLoop will push the task from CallbackQueue to CallStack
// and the function will be executed. It has to wait till the JS thread is free. 
// For example, in above code, until & unless tasks at line 15 & 16 are complete,
// task in CallbackQueue will not move to CallStack. It has to wait. The task in 
// CallbackQueue cannot come into CallStack anytime it wants, it can only make 
// it to CallStack once main JS thread is idle.