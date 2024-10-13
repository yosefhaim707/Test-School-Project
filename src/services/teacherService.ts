import Teacher, { ITeacher } from "../models/Teacher";

// Create Teacher
export const createTeacher = async (teacher: ITeacher): Promise<ITeacher> => {
    const newTeacher = new Teacher({
        name: teacher.name,
        email: teacher.email,
        password: teacher.password
    });
    const response: ITeacher = await newTeacher.save();
    return response;
};

export const updateTeacher = async (teacher: ITeacher): Promise<ITeacher> => {
    const response = await Teacher.findByIdAndUpdate(teacher._id, teacher, { new: true });
    if (!response) {
        throw new Error('Teacher not found');
    }
    return response;
}