module.exports.multiply = function (x, y) { return x * y; }
module.exports.add = function (x, y) { return x + y; }


module.exports.multiplyAcync = function (a, b, callback) {
    setTimeout(function () {
        callback(a * b)
    }, 1000)
}