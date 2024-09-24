const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title:String,
        description:String,
        priceOld:String,
        priceNew:String,
        discountpercentage:String,
        thumbnail:String,
        stock:Number,
        status:String,
        deleted:Boolean
    }
);
const Product = mongoose.model('Product', productSchema, 'TTG-shop-Db');

module.exports = Product;  