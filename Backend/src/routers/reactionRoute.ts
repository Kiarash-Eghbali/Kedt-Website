import express, { type Request, type Response } from "express";
import viewMiddleware from "../middlewares/viewMiddleware";
import Reaction from "../models/Reaction";
const router = express.Router();

router.get("/", viewMiddleware, async (req: Request, res: Response) => {
	try {
		if (!req.hasViewed) {
			const ipExists = await Reaction.findOne({ ip: req.ip, type: "view" });
			if (!ipExists) {
				res.cookie("viewed", "true", {
					secure: false, // in real domain is true
					maxAge: 10 * 24 * 60 * 60 * 1000,
					sameSite: "lax",
				});
				await Reaction.create({ type: "view", ip: req.ip });
			}
		}

		const [views, likes, dislikes] = await Promise.all([
			Reaction.countDocuments({ type: "view" }),
			Reaction.countDocuments({ type: "like" }),
			Reaction.countDocuments({ type: "dislike" }),
		]);

		res.json({ result: "success", code: "SUCCESSED", statusCode: 200, values: { views, likes, dislikes } });
	} catch (error) {
		res.status(500).json({ result: "server error", code: "SERVER_ERROR", statusCode: 500 });
	}
});

export default router;
