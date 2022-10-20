import express from "express";
import { SongsService } from "../services/songs.service";

const router = express.Router();

const isAdmin = (req) => req.user.role === "admin";

router.get("/", async (req, res) => {
    return res.json(await SongsService.findAll());
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    return res.json(await SongsService.findById(id));
});

router.post("/", async (req, res) => {
    console.log(req.user);
    if (!isAdmin(req)) {
        return res.status(400).json({
            status: 400,
            message: "You are not authorized to create a song",
        });
    }

    const { title } = req.body;
    return res.json(await SongsService.create(title));
});

router.delete("/:id", async (req, res) => {
    if (!isAdmin(req)) {
        return res.status(400).json({
            status: 400,
            message: "You are not authorized to delete a song",
        });
    }
    const id = req.params.id;
    return res.json(await SongsService.remove(id));
});

export default router;
