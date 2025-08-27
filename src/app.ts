import express from "express";
import connectDB from "./database";
import postsRouter from "./api/posts/posts.routers";
import notFound from "./middlewares/NotFound";
import errorHandler from "./middlewares/ErrorHandler";
import tagsRouter from "./api/tags/tags.router";
import authorsRouter from "./api/authors/authors.routers";

const PORT = 8000;
const app = express();

app.use(express.json());

app.use("/authors", authorsRouter);
app.use("/posts", postsRouter);
app.use("/tags", tagsRouter);
app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});