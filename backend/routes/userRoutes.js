const express = require("express");
const {
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerUser);

//LOGIN || POST
router.post("/login", loginUser);

module.exports = router;
