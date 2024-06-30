const express = require('express');
let products = require("./db")
const app = express()
const bodyParser = require("body-parser")
const { v4: uuidv4 } = require("uuid");
const cors = require("cors")
const port = 3000


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(products);
app.get('/products', (req, res) => {
    if (products.length > 0) {
        res.status(200).send({
            message: "success",
            error: null,
            data: products
        })
    } else {
        res.status(204).send({
            message: "not found",
            data: null
        })
    }
})
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const foundProducts = products.find((x) => x.id == id);
    if (foundProducts) {
        res.status(200).send({
            message: "succes",
            statusCode: 200,
            data: foundProducts
        })
    } else {
        res.send({
            message: "not found",
            statusCode: 204,
            data: null
        })
    }
})
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const idx = products.findIndex((x) => x.id == id);
    const deleted = products.find((x) => x.id == id);
    if (deleted) {
        products.splice(idx, 1);
        res.send({
            message: "deleted",
            data: deleted
        })
    } else {
        res.send({
            message: "not found",
            data: null
        })
    }
});

app.post("/products", (req, res) => {

    const { title, price, description, category, image, rating } = req.body;
    console.log(req.body);
    const newProduct = {
        id: uuidv4(),
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
    }
    products.push(newProduct);
    res.send({
        message: "post success",
        data: newProduct
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})