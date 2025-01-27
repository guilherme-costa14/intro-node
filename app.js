console.log("Hello NodeJS")
const fs = require("fs") //biblioteca do node, manipular arquivos
// fs.writeFileSync("arquivo.txt", "Hello NodeJS, again")
// fs.appendFileSync("arquivo.txt", "\nIntrodução os NodeJS")
// fs.appendFileSync("arquivo.txt", "\nUsando uma biblioteca")

const sh = require("superheroes")
let nome = sh.random()
console.log(nome)
fs.appendFileSync("heroi.txt", "\n"+nome)