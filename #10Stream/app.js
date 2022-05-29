// Используя потоки чтения и записи, мы можем считывать и записывать информацию в файл. Например:
const fs = require('fs');
let writeableStream = fs.createWriteStream('info.txt')
writeableStream.write("Менин атым Омурбек")
writeableStream.write("Уландысы \n");
writeableStream.end('Жазуу бутту')

let readableStream = fs.createReadStream('info.txt', 'utf-8')
readableStream.on("data", function (chunk) {
    console.log(chunk);
})