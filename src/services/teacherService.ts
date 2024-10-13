import Teacher, { ITeacher } from "../models/Teacher";

// Create Teacher
const createTeacher = async (teacher: ITeacher): Promise<ITeacher> => {
    const newTeacher = new Teacher({
        name: teacher.name,
        email: teacher.email,
        password: teacher.password
    });
    const response: ITeacher = await newTeacher.save();
    return response;
};

