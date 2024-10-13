import express from 'express';
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";
import teacherRouter from './routes/teacherRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());


connectToDatabase();

// Routes
app.use('/teachers', teacherRouter);


// Error handling middleware


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


