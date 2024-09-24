const Product = require("../../models/product.model");

// [GET] /products

module.exports.index = async (req, res) => {
    const products = await Product.find({});

    console.log(products);

    res.render("client/pages/products/index", {
        pageTitle: "List of products",
        products: products
    });


}