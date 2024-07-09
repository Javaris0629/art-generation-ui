const express = require("express")
const { 
    getUser, 
    updateUser, 
    searchUser, 
 } = require("../controllers/userController")

 const router = express.Router() 

 // Get User 
 router.get("/:userId", getUser)

 // Update User 
 router.put("/update/:userId", updateUser) 

 // Search User 
 router.get("/search/:query", searchUser)

 module.exports = router