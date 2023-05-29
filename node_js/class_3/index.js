//?? nulish
let a = false;
let b = true;
console.log(a ?? b);

// short for
let aa,bb;
let res = (aa !== null & aa !== undefined) ? aa : bb;
console.log(res);

//core modules of node js (build in modules in the library, come with the installation itself)
//http, assert, fs, path, process, os, querystring url...

//local modules

//third party modules
//mongoose, express, angular, react...


const calculator = require("./calculator");
// OR
//const {add, minus} = require("./calculator");

console.log(calculator.multi(1,5));

//ova e ecma script, za da koristish import,export mesto require (require e od node)
//promena od .js vo .mjs (ecma script)
//export function add(a, b){ return a+b;}
//import {add} from "./calculator.js"
//ili mesto promena vo .mjs vo package package.json dodadi "type":"module"

const  {textConverter, textStats} = require("./converter");

let latText = "rezultatot od ova kje bide kirilichen tekst";
let conv = textConverter("lat2cyr", latText);
console.log(conv);

let cyrText = "Ова е кириличен текст";
let conv2 = textConverter("cyr2lat", cyrText);
console.log(conv2);

const rendomText = "Lorem ipsum dolor sit amet, consecutut adssfdsa fdfd. fafafsa afa!";

let stats = textStats(rendomText);
console.log(stats);
