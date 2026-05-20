import express from 'express';
import cors from 'cors';
import { connectDB } from './config/mongodb.js';
import dotenv from 'dotenv';
import userRouter from './routes/authRoutes.js';
import adminRouter from './routes/adminRoutes.js';
dotenv.config()

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
)

connectDB();

app.get('/', (req,res) => {
    res.send('API running........')
})

app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})


