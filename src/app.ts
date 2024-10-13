import express from 'express';
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());


connectToDatabase();

// Routes



// Error handling middleware


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


