import express from "express";
import { LikesSerivce } from "../services/likes.service";

const router = express.Router();

router.get("/", async (req, res) => {
    const userId = req.user._id;

    return res.json(await LikesSerivce.findAllLikedSongs(userId));
});

router.post("/:songId", async (req, res) => {
    const userId = req.user._id;

    const { songId } = req.params;

    return res.json(await LikesSerivce.likeSong(userId, songId));
});

router.delete("/:songId", async (req, res) => {
    const userId = req.user._id;

    const { songId } = req.params;

    return res.json(await LikesSerivce.unLikeSong(userId, songId));
});

export default router;
