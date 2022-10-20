import { Types } from "mongoose";
import { Like } from "../models/like.model";

export const LikesSerivce = {
    likeSong: (userId, songId) =>
        Like.create({
            userId: new Types.ObjectId(userId),
            songId: new Types.ObjectId(songId),
        }),
    unLikeSong: (userId, songId) =>
        Like.findOneAndDelete({
            userId: new Types.ObjectId(userId),
            songId: new Types.ObjectId(songId),
        }),
    findAllLikedSongs: (userId) =>
        Like.find({
            userId: new Types.ObjectId(userId),
        }),
};
