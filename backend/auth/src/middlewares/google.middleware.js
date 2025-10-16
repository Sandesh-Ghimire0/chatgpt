import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import passport from 'passport';
import User from "../models/user.model.js";
import { generateAccessToken } from "../utils/accessToken.js";

import dotenv from 'dotenv'
dotenv.config()


passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:process.env.GOOGLE_CALLBACK_URL
        },
        async (accessToken, refreshToken , profile, done) => {
            try {
                let user = await User.findOne({googleId:profile.id})

                if(!user){
                    user = await User.create({
                        googleId:profile.id,
                        username:profile.displayName,
                        email:profile.emails[0]?.value
                    })
                }

                const token = generateAccessToken(user)
                const loggedInUser = await User.findById(user._id)

                return done(null, {user:loggedInUser, token:token})

            } catch (error) {
                console.log("oauth middleware error ",error)
                return done(error, null)
            }
        }
    )
)

export default passport