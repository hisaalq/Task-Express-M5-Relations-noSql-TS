import { Author } from "../../models/Author";
import { Request, Response } from "express";

export const createAuthor = async (req: Request, res: Response) => {
    try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ message: "Error creating author" });
    }
};

export const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await Author.find().populate("posts");
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching authors" });
    }
};