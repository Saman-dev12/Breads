const express = require("express");
const {
  createPost,
  getPost,
  deletepost,
  likeUnlikepost,
  replyToPost,
  getFeedPosts,
  getUserPosts,
} = require("../controllers/postController");
const protectRoute = require("../middlewares/protectRoute");
const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);
router.post("/create", protectRoute, createPost);
router.delete("/:postId", protectRoute, deletepost);
router.put("/like/:postId", protectRoute, likeUnlikepost);
router.put("/reply/:postId", protectRoute, replyToPost);

module.exports = router;
