const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs=require("fs/promises")

promiseTheaterIXX()
  .then((datahasilresolve)=>{console.log(datahasilresolve)})
//console.log(datahasilresolve)
promiseTheaterVGC()
  .then((datavgc)=>{console.log(datavgc)})


// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = null;

module.exports = {
  promiseOutput,
};
console.log()
