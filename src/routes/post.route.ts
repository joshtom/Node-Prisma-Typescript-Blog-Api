import express from "express";
import PostController from "../controllers/post.controller";

const router = express.Router();

router.post("/create", PostController.createBlogPost);
router.post("/createPostAndComments", PostController.createPostAndComments);
router.get("/getall", PostController.getBlogPosts);
router.get("/get/:id", PostController.getBlogPost);
router.put("/update/:id", PostController.updateBlogPost);
router.delete("/delete/:id", PostController.deleteBlogPost);
router.delete("/deleteall", PostController.deleteAllBlogPosts);
router.post("/like", PostController.likeBlogPost);

export default router;
