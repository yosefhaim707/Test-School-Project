import ClassRoom, { IClassRoom } from "../models/ClassRoom";


export const createClassRoom = async (classRoom: IClassRoom): Promise<IClassRoom> => {
    const newClassRoom = new ClassRoom ({
        name: classRoom.name,
        teacher: classRoom.teacher
    });
    const response: IClassRoom = await newClassRoom.save();
    return response;
}