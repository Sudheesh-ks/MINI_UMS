import express from 'express';
import cors from 'cors';
import { connectDB } from './config/mongodb.js';
import dotenv from 'dotenv';
import userRouter from './routes/authRoutes.js';
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


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})


