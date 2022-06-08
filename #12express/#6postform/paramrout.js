const express = require('express');
const app = express();

app.get("/products/:producId", function (req, res) {
    res.send("productId:" + req.params["productId"])
});
app.get("/categories/:categoryId/products/:productId", function (req, res) {
    let catId = req.params["categoryId"]
    let prodId = req.params["productId"];
    res.send(`Категории : ${catId} Товар: ${prodId}`)
})
app.listen(3000)