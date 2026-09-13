import mongoose from "mongoose";

const ReactionData = new mongoose.Schema({
    viewd: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    disLikes: { type: Number, default: 0 },
});


export default mongoose.model("Reaction", ReactionData)