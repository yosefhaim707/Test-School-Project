import express from 'express';
import { teacherRegister } from '../controllers/teacherController';


const router = express.Router();


router.post('/register', teacherRegister);

export default router;