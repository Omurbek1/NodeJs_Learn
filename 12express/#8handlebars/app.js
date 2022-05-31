const express = require('express');
const app = express();
app.set("view engine", "hbs");
app.use("/contact", function (_, response) {
    response.render("contact.hbs", {
        title: "Менин контактарым";
        email: "omurbek@gmail.com";
        
    });
});
app.use("/about", function (_, response) {
    response.send("Биз жонундо")
})
app.use("/", function (_, response) {
    response.send("Башкы бет")
})
app.listen(3000)