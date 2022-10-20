import mongoose from "mongoose";

export async function connectDatabase() {
    const URL = process.env.MONGODB_URL;

    if (!URL)
        throw new Error(
            "Please set MONGODB_URL in .env file or provide it via terminal."
        );

    await mongoose.connect(URL);
}
