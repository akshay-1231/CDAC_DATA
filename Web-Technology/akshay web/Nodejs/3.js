//to read any file in node js in syncronus or asyncronus
//to read index.html form node js in syncronus way
var fs=require('fs');
console.log('start');

var ans=fs.readFileSync('index.html','UTF-8');

console.log(ans);



console.log('end');
