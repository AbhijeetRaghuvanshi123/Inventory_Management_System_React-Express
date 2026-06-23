import passport from "passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import fs from 'fs';
import path from "path";
import { publicKey } from "./keys.js";
import userQuery from "../db/userQuery.js";

passport.use(new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: publicKey,
        algorithms: ["RS256"]
    },
    async (payload, done) => {
        try {
            const user = userQuery.getUserById(payload.sub);

            if(!user){
                return done(null, false)
            }

            return done(null, user)

        } catch (error) {
            return done(error, false);
        }
    }
))