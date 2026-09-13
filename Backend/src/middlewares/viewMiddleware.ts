import { type Request, type Response, type NextFunction } from "express";

const viewMiddleware = function (req: Request, res: Response, next: NextFunction) {
	const cookie = req.cookies;
	if (!cookie.viewed) {
		req.hasViewed = false;
	} else {
		req.hasViewed = true;
	}

	next();
};

export default viewMiddleware;
