const request = require('supertest');
let app = request("./app.js").app;
it("shoul return hello", function (done) {
    request(app)
        .get("/")
        .expect("hello test")
        .end(done)
})