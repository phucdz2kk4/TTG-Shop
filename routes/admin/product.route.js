const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);

router.patch('/change-status/:status/:id', controller.changeStatus);

router.patch('/change-multi', controller.changeMulti);

router.delete('/delete/:id', controller.deleteItem);

router.get("/change-status/:id/:status", controller.changeStatus);

router.post("/create", controller.create);

router.get("/create", controller.create);


module.exports = router;
