import express from 'express';
import cors from 'cors';
import './config/passport.js';
import passport from 'passport';
import authRouter from './routes/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRouter);

export default app;