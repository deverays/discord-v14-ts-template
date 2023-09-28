import mongoose from "mongoose"

export default mongoose.model("guilds", new mongoose.Schema({
    guildId: { type: String, default: 'select', required: true },
    test: String
}))