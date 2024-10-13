import express from 'express';
import { teacherLogin, teacherRegister } from '../controllers/teacherController';


const router = express.Router();


router.post('/register', teacherRegister);
router.post('/login', teacherLogin);

export default router;