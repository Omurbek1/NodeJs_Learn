
// Башка файлды окуу учун колдонулат
// Биз азыр окуй ала турган стрим жаздык
const fs = require('fs')

const readStream = fs.createReadStream('./doc/info.txt')

readStream.on('data', (chunk) => {
    console.log('=========');
    console.log(chunk.toString());
})


// Эми биз жаза ала турган Stream жазабыз! Бул бизге жаны файлды тузууго жардам берет
// Бул менен биз мурунку файлдагы данныйды жаны файлга кочуруп алдык
const writeAtream = fs.createWriteStream('./doc/info_two_stream.txt')

readStream.on('data', (chunk) => {
    writeAtream.write(chunk)
})
