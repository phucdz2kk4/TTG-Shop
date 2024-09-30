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
    } // used to when click find active or inactive
    
    // tinh nang search
    const objectSearch = searchHelper(req.query); // search used

    if(objectSearch.keyword){
        find.title = objectSearch.title;
    }
    // end search 


    // pagination
    let objectPagination = {
        currentPage : 1,
        limitItems : 4,
    }    
    if(req.query.page){
        objectPagination.currentPage = parseInt(req.query.page);
    }
    
    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems; // calc page = (page - 1) * item page
    
    const countProducts = await Product.countDocuments(find); // tao bien count, dung truoc modal luon phai dung async await

    const products = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

    const totalPage = Math.ceil(countProducts / objectPagination.limitItems); // math ceil : lam tron len

    objectPagination.totalPages = totalPage; // used to link to pug

    // link to view
    res.render("admin/pages/products/index", {
     // nem bien sang pug de su dung
        pageTitle: "Products",
        products: products,
        filterStatus: filterStatus,
        keyword : objectSearch.keyword,
        pagination: objectPagination,
    })
    
}
