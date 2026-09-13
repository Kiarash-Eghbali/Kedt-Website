import mongoose from "mongoose";

enum ReactionEnum {
    View = "view",
    Like = "like",
    DisLike = "disLike",
}

const ReactionData = new mongoose.Schema({
    type: ReactionEnum,
    ip: { type: String, required: true },
}, {timestamps: true});


export default mongoose.model("Reaction", ReactionData)