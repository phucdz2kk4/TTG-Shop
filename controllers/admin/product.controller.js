const Product = require("../../models/product.model"); // link to database

const filterStatusHelper = require("../../helpers/filterStatus"); // filter status

const searchHelper = require("../../helpers/search"); // tinh nang search

const paginationHelper = require("../../helpers/pagination"); // tinh nang pagination

const mongoose = require("mongoose"); // link to database
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

  if (objectSearch.keyword) {
    find.title = objectSearch.title;
  }
  // end search

  //current (trang hien tai)
  //limit (so luong muon lay moi trang)
  const countProducts = await Product.countDocuments(find); // tao bien count, dung truoc modal luon phai dung async await

  // pagination
  let objectPagination = paginationHelper(
    {
      currentPage: 1,
      limitItems: 4,
    },
    req.query, // get information from URL
    countProducts
  );

  const products = await Product.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.skip);

  // link to view
  res.render("admin/pages/products/index", {
    // nem bien sang pug de su dung
    pageTitle: "Products",
    products: products,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};

// [GET] /admin/products/change-status/:id
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status.toString().trim();
  const id = req.params.id.trim();
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid ID");
  }

  await Product.updateOne({ _id: id.toString() }, { status: status });
  res.redirect("/admin/products");
};
