import { Router } from "express";
import { createAuthor, getAuthors } from "./authors.controllers";

const router = Router();

router.post("/", createAuthor);
router.get("/", getAuthors);

export default router;