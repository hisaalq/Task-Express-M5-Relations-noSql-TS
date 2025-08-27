import express from "express";

const router = express.Router();

router.post("/:postId/:tagsId", addTagToPost);


export default router;