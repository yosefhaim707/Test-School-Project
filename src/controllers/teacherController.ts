import { Request, Response } from "express";
import { createTeacher, updateTeacher, validateTeacher } from "../services/teacherService";
import { createClassRoom } from "../services/classRoomService";
import { registerTeacherDTO } from "../dto/registerTeacherDTO";
import Teacher, { ITeacher } from "../models/Teacher";
import ClassRoom, { IClassRoom } from "../models/ClassRoom";
import { loginDTO } from "../dto/loginDTO";
import { generateToken } from "../utils/tokenGenerator";


export const teacherRegister = async (req: Request, res: Response): Promise<void> => {
    try {
        const requestBody: registerTeacherDTO = req.body;
        
        if (!requestBody) {
            res.status(404).json({ message: 'Incorrect Body Request' });
            throw new Error('Body Does Not Match The Requirements')
        }
        
        let teacherModel: ITeacher = new Teacher ({
            name: requestBody.name,
            email: requestBody.email,
            password: requestBody.password
        });
        let teacherResponse: ITeacher = await createTeacher(teacherModel);

        let classRoomModel: IClassRoom = new ClassRoom({
            name: requestBody.className,
            teacher: teacherResponse._id
        })
        let classRoomResponse: IClassRoom = await createClassRoom(classRoomModel);
        
        teacherResponse.classRoom = classRoomResponse._id;
        const finalResponse: ITeacher = await updateTeacher(teacherResponse);

        res.status(201).json(finalResponse);
    } catch (error) {
        res.status(500).json({ message: 'Some Error' + error });
    }

}

export const teacherLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const registerBody: loginDTO = req.body;

        if (!registerBody) {
            res.status(404).json({ message: 'Incorrect body request' });
            throw new Error('Body Does Not Match The Requirements');
        }

        const validationResponse: ITeacher = await validateTeacher(registerBody.email, registerBody.password);

        if (!validationResponse) {
            res.status(403).json({ message: 'Invalid details'})
        }

        const tokenResponse = generateToken(validationResponse._id, 'teacher')
    } catch (error) {
        res.status(500).json({ message: 'Some error' + error})
    }
}