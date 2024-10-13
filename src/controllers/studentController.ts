import { Request, Response } from "express";
import { createStudent } from "../services/studentServices";
import { registerStudentDTO } from "../dto/registerStudentDTO";
import Student, { IStudent } from "../models/Student";
import { getClassByName } from "../services/classRoomService";


export const studentRegister = async (req: Request, res: Response): Promise<void> => {
    try {
        const registerBody: registerStudentDTO = req.body;
        if (!registerBody) {
            res.status(404).json({ message: 'Incorrect body request' });
            throw new Error('Incorrect body request')
        }

        const selectedClass = await getClassByName(registerBody.className);

        let newStudent: IStudent = new Student({
            name: registerBody.name,
            email: registerBody.email,
            password: registerBody.password,
            classRoom: selectedClass._id
        });
        
        const finalResponse: IStudent = await createStudent(newStudent);
        res.status(201).json(finalResponse);
        
    } catch (error) {
        console.log(error);
        
    }
}
