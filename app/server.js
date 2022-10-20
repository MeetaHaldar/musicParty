import express, { urlencoded, json } from "express";
import passport from "passport";
import UsersController from "./controllers/users.controller";
import SongsController from "./controllers/songs.controller";
import LikesController from "./controllers/likes.controller";

const PORT = process.env.PORT || 3000;

export async function initServer() {
    const app = express();

    app.use(urlencoded({ extended: true }));
    app.use(json());

    app.use("/users", UsersController);

    app.use(
        "/songs",
        passport.authenticate("jwt", { session: false }),
        SongsController
    );
    app.use(
        "/likes",
        passport.authenticate("jwt", { session: false }),
        LikesController
    );

    return new Promise((res, rej) => {
        app.listen(PORT, (err) => {
            if (err) rej(err);
            console.log(`Server is listening on PORT: ${PORT}`);
            res();
        });
    });
}
