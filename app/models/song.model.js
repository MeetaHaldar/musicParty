import { model, Schema } from "mongoose";

const songSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    releaseDate: {
        type: String,
        required: true,
        default: '01-01-2021',
        index: true,
    },
    singers: {
        type: [String],
        // required: true,
        index: true,
    },
    albums: {
        type: [String],
        // required: true,
        index: true,
    },
    length: {
        type: Number,
        required: true,
        default: 3600,
        index: true,
    },
});

export const Song = model("Song", songSchema);
