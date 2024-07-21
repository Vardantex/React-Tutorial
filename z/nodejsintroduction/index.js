// Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, typically on a server. It uses the V8 JavaScript engine, which is the same engine that powers Google Chrome. Node.js can run on Windows,Linux,Unix,Mac OS. Node.js can generate dynamic page content,create, open, read, write, delete, and close files on the server, collect form data,Add, delete, modify data in your database.To run a javascript file using Node.js,we can use the node command so "node file.js"

/* 

In Node.js, in every JavaScript file we can use a built-in object called 'module' which is a global object that represents the current javascript file executed so each javascript file can access the module object and attach functions,objects to it using module.exports. We can import a module from another module/file using require("").Consider modules to be the same as JavaScript libraries.Node.js has a set of built-in modules such as http,fs,os,path,etc. which you can use without any further installation.

The module object contains properties and methods that provide information about the current javascript file executed and allow you to interact with it.Some properties of the module object:

module.id: This is the absolute path

module.path: the exact directory  for the file in the system

module.exports :  This property is used to define what a module exports.It determines the interface of the module, i.e., what other modules can access when they require the module.

module.children: children property of the module object is an array that contains references to child modules that have been loaded by the current module. When you use require() to load a module from within another module, the loaded module becomes a child module of the module that required it.

*/

/* 
We can import/include/load any module/library using the require("") syntax , in between double or single quotes, you need to add the module that is installed using npm/yarn or your custom module to import it. Remember ./ means the same folder so since our custom module called 'one' exists in the same folder as index.js,we used ./ but to include/import external modules that we install using npm or yarn,we don't need to define ./ or if we use the built in modules 

Below by doing require("./one"), we include all the code inside one.js in this file index.js
*/
require("./one");

// Since this is a javascript file, we can define any JavaScript code in here.
function hello() {
  console.log("hi from hello function");
}

hello();

// Notice, in 'sum.js' file, module.exports property is equal to 'sumNumbers' function, so when we include sum.js file using require("./sum") ,it will return us that 'sumNumbers' function.
const sum = require("./sum");

console.log(sum(3, 5));

// example.js has module.exports defined and it is equal to an object that has 2 keys each is a function,so require("./example") below returns us an object which has readFile and showMessage
const example = require("./example");
console.log(example);
example.showMessage();
example.readFile();

console.log(module);
