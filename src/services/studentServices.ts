import ClassRoom from "../models/ClassRoom";
import Student, { IStudent } from "../models/Student";

export const createStudent = async (student: IStudent): Promise<IStudent> => {
    const newStudent: IStudent = new Student({
        name: student.name,
        email: student.email,
        password: student.password,
        classRoom: student.classRoom
    });
    const response: IStudent = await newStudent.save();
    return response;
}