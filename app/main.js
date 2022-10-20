import { config } from "dotenv";
import { connectDatabase } from "./db";
import "./auth/auth";
import { initServer } from "./server";

config();

(async () => {
    try {
        await connectDatabase();

        await initServer();
    } catch (error) {
        console.log(error);
    }
})();
