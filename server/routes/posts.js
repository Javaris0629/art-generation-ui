const express = require("express");
const router = express.Router();
const {
  createPostWithImagesController_V3,
  createPostWithImagesController_V2,
  getPosts,
  getSinglePost,
  getUserPosts,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/postController");

//CREATE POST WITH IMAGES V3
router.post("/create/v3/:userId", createPostWithImagesController_V3);
//CREATE POST WITH IMAGES V3
router.post("/create/v2/:userId", createPostWithImagesController_V2);

//GET ALL POSTS
router.get("/all", getPosts);

//GET SINGLE POST
router.get("/single/:postId", getSinglePost);

//GET USER POSTS
router.get("/user/:userId", getUserPosts);

//DELETE POST
router.delete("/delete/:postId", deletePost);

//LIKE POST
router.post("/like/:postId", likePost);

//DISLIKE POST
router.post("/dislike/:postId", dislikePost);

module.exports = router;