const fs = require('fs');

fs.readFile('text.js', 'utf-8',
    function (error, data) {
        console.log("Ассинхронный чтение файла!");
        if (error) throw error
        console.log(data);
    })

// sync
console.log('Синхронный чтение файла');
let fileContent = fs.readFileSync("text.js", "utf-8");
console.log(fileContent);