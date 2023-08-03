const express = require("express");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
  userBlog,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes
// GET || all blogs
router.get("/all-blog", getAllBlogs);

//POST || create blog
router.post("/create-blog", createBlog);

//PUT || update blog
router.put("/update-blog/:id", updateBlog);

//GET || SIngle Blog Details
router.get("/get-blog/:id", getBlogById);

//DELETE || delete blog
router.delete("/delete-blog/:id", deleteBlog);

//GET || user blog
router.get("/user-blog/:id", userBlog);

module.exports = router;
