// const { callbackify } = require("util");

// // Async Node js
// function dispaly(data, callback) {
//     var randInt = Math.random() * (10 - 1) + 1;
//     var err = randInt > 5 ? new Error('Иштетуудо ката чыкты. 5тен чон сан!') : null
//     setTimeout(function () {
//         callback(err, data);

//     }, 0)
// }

// console.log("Программа иштеп баштады!");
// dispaly("Маалымат иштелип жатат....", function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });
// console.log("Программа иштелип бутту!");


// method 2
function displayInf(callbacks) {
    callbacks();
}
console.log("Программа иштеп баштады!!!");
setTimeout(function () {
    console.log("timeout 500");
}, 500)
setTimeout(function () {
    console.log('timeout 100');
}, 100)

displayInf(function () {
    console.log('timeoutтан тышкары');
})
console.log("Программа иштелип бутту!");