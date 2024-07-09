const express = require("express");
const {
  register,
  login,
  logout,
  refetchUser,
} = require("../controllers/authController");
const router = express.Router();

//REGISTER
router.post("/register", register);

//LOGIN
router.post("/login", login);

//LOGOUT
router.get("/logout", logout);

//FETCH CURRENT USER
router.get("/refetch", refetchUser);

module.exports = router;