import { Request, Response } from "express";
import Tag from "../../models/Tags";
import Post from "../../models/Post";

export const addTagToPost = async (req: Request, res: Response) => {
    const { postId, tagsId } = req.params;
    const post = await Post.findByIdAndUpdate(postId, 
        { $push: { tags: tagsId } }, { new: true }).populate("tags");
    const tag = await Tag.findByIdAndUpdate(tagsId, 
        { $push: { posts: postId } }, { new: true }).populate("posts");
    if (post && tag) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: "Post or tag not found" });
    }
};