
// Башка файлды окуу учун колдонулат
// Биз азыр окуй ала турган стрим жаздык
const fs = require('fs')

const readStream = fs.createReadStream('./doc/info.txt')

readStream.on('data', (chunk) => {
    console.log('=========');
    console.log(chunk.toString());
})


// Эми биз жаза ала турган Stream жазабыз!

