const request = require('supertest');
let app = request("./app.js").app;
it("shoul return hello", function (done) {
    request(app)
        .get("/")
        .expect("hello test")
        .end(done)
})

it("should return notFound with status 404", function (done) {
    request(app)
        .get("/error")
        .expect(404)
        .end("Notfound")
})