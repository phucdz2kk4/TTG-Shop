const Product = require("../../models/product.model"); // link to database

const filterStatusHelper = require("../../helpers/filterStatus"); // filter status

const searchHelper = require("../../helpers/search");
// [GET] /admin/products
module.exports.index = async (req, res) => {

    const filterStatus = filterStatusHelper(req.query); // filter status used

    // call find trong database
    let find = {
        deleted: false,
    };
    
    if (req.query.status) {
        find.status = req.query.status;
    }
    
    // tinh nang search
    const objectSearch = searchHelper(req.query); // search used

    if(objectSearch.regex){
        find.title = objectSearch.regex;
    }

    // end search 
    const products = await Product.find(find);
    

    // link to view
    res.render("admin/pages/products/index", {
     // nem bien sang pug de su dung
        pageTitle: "Products",
        products: products,
        filterStatus: filterStatus,
        keyword : objectSearch.keyword
    })
    
}