declare global {
    namespace Express {
        interface Request {
            hasViewed?: boolean;
        }
    }
}

export {};