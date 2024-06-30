const express = require("express");
let dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Schema } = mongoose;
const app = express();
const PORT = process.env.PORT || 8000;
const DB = process.env.DB;

app.use(cors());

mongoose
    .connect(DB)
    .then(() => {
        console.log("connected succesfully");
        app.listen(PORT, () => {
            console.log(`Example app listening on port:http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
const productSchema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true }
)
    
const Products = mongoose.model("Products", productSchema);
//getAll 
app.get('/products', async (req, res) => {
    try {
        const products = await Products.find({});

        if (products.length > 0) {
            res.status(200).send({ message: 'success', data: products })
        }
    } catch (error) {

    }
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Products.findByIdAndDelete(id);
        if (product) {
            const products = await Products.find({});
            res.json({
                message: "Product deleted!"
            });
        } else {
            res.json({
                message: "Product not found!"
            });
        }
    } catch (error) {
        res.json({
            message: "Error 404!"
        });
    }
});
