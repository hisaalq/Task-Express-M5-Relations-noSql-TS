import express from "express";
import { addTagToPost, createTag } from "./tags.controller";

const router = express.Router();

router.post("/", createTag);
router.post("/:postId/:tagsId", addTagToPost);

export default router;