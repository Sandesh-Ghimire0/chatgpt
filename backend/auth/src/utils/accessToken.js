import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    const token = jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    return token
};
