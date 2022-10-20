import { Song } from "../models/song.model";

export const SongsService = {
    findAll: async () => Song.find(),

    findById: async (id) => Song.findById(id),

    create: async (title) => {
        const song = new Song({ title });
        return song.save();
    },

    remove: async (id) => Song.findByIdAndDelete(id),
};
