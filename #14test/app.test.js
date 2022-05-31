var operations = require("./app")



it("shoul  add two numbers", function () {
    var expectedResult = 16;
    var result = operations.add(10, 6);
    if (result !== expectedResult) {
        throw new Error(`Expected ${expectedResult} but got${result}`)
    }
});


it("shoul async multipay two numbers", function (done) {
    var experedResult = 12;
    operations.multiplyAcync(4, 3, function (result) {
        if (result !== experedResult) {
            throw new Error(`Expected ${experedResult} but got${result}`)
        }
        done()
    })
});