import express from 'express';
import cors from 'cors';
import './config/passport.js';
import passport from 'passport';
import authRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import stockRouter from './routes/stockRoutes.js';
import dashboardRouter from './routes/dashBoardRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/order', orderRouter);
app.use('/stock', stockRouter);
app.use('/dashboard', dashboardRouter);

export default app;