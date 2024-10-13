import { studentRegister } from "../controllers/studentController";
import express from 'express';

const router = express.Router();


router.post('/register', studentRegister);

export default router;