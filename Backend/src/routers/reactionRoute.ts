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

router.post("/like", async (req: Request ,res: Response) => {
	try {
		const ipExists = await Reaction.findOne({ ip: req.ip, type: "like" })
		const dislikeBefore = await Reaction.findOne({ ip: req.ip, type: "dislike" });
		if (! ipExists && ! dislikeBefore) {
			await Reaction.create({ ip: req.ip, type: "like" });
		} else {
			const likes = await Reaction.countDocuments({ type: "like" })
			return res.status(200).json({ result: "liked or dislike before", code: "LIKED_OR_DISLIKE_BEFORE", statusCode: 200, value: { likes } });
		}

		const likes = await Reaction.countDocuments({ type: "like" });
		res.json({ result: "success", code: "SUCCESSED", statusCode: 200, value: { likes } })
	} catch (error) {
		res.status(500).json({ result: "server error", code: "SERVER_ERROR", statusCode: 500 });
	}
})


router.post("/dislike", async (req: Request, res: Response) => {
	try {
		const ipExists = await Reaction.findOne({ ip: req.ip, type: "dislike" })
		const likeBefore = await Reaction.findOne({ ip: req.ip, type: "like" })
		if (! ipExists && ! likeBefore) {
			await Reaction.create({ ip: req.ip, type: "dislike" });
		} else {
			const dislikes = await Reaction.countDocuments({ type: "dislike" });
			return res.status(200).json({ result: "liked or dislike before", code: "LIKED_OR_DISLIKE_BEFORE", statusCode: 200, value: { dislikes } })
		}

		const dislikes = await Reaction.countDocuments({ type: "dislike" });
		res.json({ result: "success", code: "SUCCESSED", statusCode: 200, value: { dislikes } });
	} catch (error) {
		res.status(500).json({ result: "server error", code: "SERVER_ERROR", statusCode: 500 });
	}
})

export default router;
