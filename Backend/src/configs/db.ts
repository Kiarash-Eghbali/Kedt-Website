import mongoose from "mongoose";

async function connectDB() {
	const mongo_url: string | undefined = process.env.MONGODB_URL;
	if (!mongo_url) throw new Error("MONGODB_URL is not defined");
	try {
		await mongoose.connect(mongo_url);
		console.log("Database connected!");
	} catch (error) {
		throw error;
	}
}

export default connectDB;
