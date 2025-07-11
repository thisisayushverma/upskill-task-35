import User from "../schema/user.schema.js";
import { decodeToken } from "../utils/token.utils.js";

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            const error = new Error("Unauthorized");
            error.status = 401;
            throw error;
        }
        const decoded = decodeToken(token);
        const user = await User.findById(decoded.id);
        if (!user) {
            const error = new Error("Unauthorized");
            error.status = 401;
            throw error;
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}


export {authenticate}