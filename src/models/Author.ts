import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: "Post",
    },
});

export const Author = model("Author", authorSchema);
