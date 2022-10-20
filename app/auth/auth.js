import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import PassportJWT from "passport-jwt";
import { User } from "../models/user.model";

const { ExtractJwt, Strategy: JWTstrategy } = PassportJWT;

passport.use(
    "login",
    new localStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        async (username, _, done) => {
            try {
                let user = await User.findOne({ username });

                if (!user) {
                    user = await User.create({ username });
                }

                return done(null, user, { message: "Logged in Successfully" });
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.use(
    new JWTstrategy(
        {
            secretOrKey: "TOP_SECRET",
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);
