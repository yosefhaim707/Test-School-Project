import ClassRoom, { IClassRoom } from "../models/ClassRoom";


export const createClassRoom = async (classRoom: IClassRoom): Promise<IClassRoom> => {
    const newClassRoom = new ClassRoom ({
        name: classRoom.name,
        teacher: classRoom.teacher
    });
    const response: IClassRoom = await newClassRoom.save();
    return response;
}

export const getClassByName = async (className: string): Promise<IClassRoom> => {
    const response = await ClassRoom.findOne({ name: className });
    if (!response) {
        throw new Error('Invalid class name');
    }
    return response;
}