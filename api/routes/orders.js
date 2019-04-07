const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


// const Order = require('../../database/schema/order');
// const Product=require('../../database/schema/product');


const checkJwtAuth = require('../middleware/authcheck-jwt');

const OrdersController = require('../controllers/order');

// Handle incoming GET requests to /orders
router.get("/", checkJwtAuth, OrdersController.orders_get_all);

router.post("/", checkJwtAuth, OrdersController.orders_create_order);

router.get("/:orderId", checkJwtAuth, OrdersController.orders_get_order);

router.delete("/:orderId", checkJwtAuth, OrdersController.orders_delete_order);

module.exports = router;
