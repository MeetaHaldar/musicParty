import { model, Schema } from "mongoose";
import { Types } from "mongoose";

const likeSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        index: true,
        ref: "User",
    },
    songId: {
        type: Types.ObjectId,
        required: true,
        index: true,
        ref: "Song",
    },
});

export const Like = model("Like", likeSchema);
