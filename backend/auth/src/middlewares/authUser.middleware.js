import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';


export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }

        const user = await User.findById(decoded._id)
        if (!user) {
            return res.status(401).json({ message: "Unauthorized access" });
        } 
        req.user = user;
        next()
    } catch (error) {
        console.log("Failed to authenticate the user ", error);
        return res.status(401).json({ message: "Unauthorized access" });
    }
};
