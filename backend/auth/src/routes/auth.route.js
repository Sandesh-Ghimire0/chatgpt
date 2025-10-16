import { Router } from "express";
import passport from "../middlewares/google.middleware.js";
import { getUserProfile, gooleLogin, logout } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/authUser.middleware.js";

const router = Router();

router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    gooleLogin
);

router.get('/me',authUser,getUserProfile)
router.post('/logout',authUser,logout)

export default router;
