    
const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../../database/schema/user");

const checkJwtAuth = require('../middleware/authcheck-jwt');
const UserController=require("../controllers/user");

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", checkJwtAuth, UserController.user_delete);

module.exports = router;
