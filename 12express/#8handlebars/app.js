const express = require('express');
const app = express();
app.set("view engine", "hbs");
app.use("/contact", function (_, response) {
    response.render("contact.hbs");
});
app.use("/", function (_, response) {
    response.send("Башкы бет")
})
app.listen(3000)