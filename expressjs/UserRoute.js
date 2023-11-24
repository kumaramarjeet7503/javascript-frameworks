const express = require("express");
const router = express.Router();
const  registerUser  = require("./UserController");


router.route("/user-json").post(registerUser) ;

module.exports  = router ;