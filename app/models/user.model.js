import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        default: "user",
    },
});

export const User = model("User", userSchema);
