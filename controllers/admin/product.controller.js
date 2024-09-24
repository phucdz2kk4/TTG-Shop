const Product = require("../../models/product.model");
// [GET] /admin/products
module.exports.index = async (req, res) => {
    let filterStatus = [
        {
            name: "All",
            status: "",
            class: ""
        },
        {
            name: "Active",
            status: "active",
            class: "active"
        },
        {
            name: "Inactive",
            status: "inactive",
            class: "active"
        }
    ]
    if(req.query.status){
        const index = filterStatus.findIndex(item => item.status == req.query.status);
        filterStatus[index].class = "active";
    }else {
        const index = filterStatus.findIndex(item => item.status == "");
        filterStatus[index].class = "active";
    }
    
    console.log(req.query.status);
    let find = {
        deleted: false 
    };
    
    if (req.query.status) {
        find.status = req.query.status;
    }
    
    const products = await Product.find(find);


    console.log(products);
    res.render("admin/pages/products/index", {
        pageTitle: "Products",
        products: products,
        filterStatus: filterStatus,
    })
    
}