import express from "express";
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "./posts.controller";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/:postId", getPostById);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);


export default router;