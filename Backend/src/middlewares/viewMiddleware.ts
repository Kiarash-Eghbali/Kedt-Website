import { type Request, type Response, type NextFunction } from "express";
import ResponseInterface from "../types/ResponseInterface";

const viewMiddleware = function (req: Request, res: Response, next: NextFunction) {
    const response: ResponseInterface = {
        result: "success",
        code: "VIEW_AUTH_SUCCESSED",
        statusCode: 200,
    }
     
    res.status(200).json(response);
    next();
};

export default viewMiddleware;