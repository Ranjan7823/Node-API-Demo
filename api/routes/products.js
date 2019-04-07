const express= require('express');
const router=express.Router();
const mongoose=require("mongoose");

//const Product=require('../models/product');

//const Product= require('../../database/schema/product');

const checkJwtAuth = require('../middleware/authcheck-jwt');
const ProductsController=require("../controllers/product");

router.get("/",checkJwtAuth, ProductsController.products_get_all);

router.post("/", checkJwtAuth, ProductsController.products_create_product);

router.get("/:productId",checkJwtAuth, ProductsController.products_get_product);

router.patch("/:productId", checkJwtAuth, ProductsController.products_update_product);

router.delete("/:productId", checkJwtAuth, ProductsController.products_delete);

module.exports = router;
