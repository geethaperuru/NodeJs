const Calc = require('./calc').Calculator;

const obj = new Calc();
// process object to access arguments
//process.argv
let _first = parseInt(process.argv[2] || '5');
let _next = parseInt(process.argv[3] || '7');
let op=process.argv[4] || add ;
if(op=="add")
    console.log(obj._add(_first,_next));
else if(op=='sub')
    console.log(obj._sub(_first,_next));
else if(op=='mul')
    console.log(obj._mul(_first,_next));