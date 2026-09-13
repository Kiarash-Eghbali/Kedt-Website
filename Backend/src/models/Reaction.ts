import mongoose from "mongoose";

const ReactionData = new mongoose.Schema(
	{ type: { type: String, enum: ["view", "like", "dislike"], required: true }, ip: { type: String, required: true } },
	{ timestamps: true },
);

export default mongoose.model("Reaction", ReactionData);
