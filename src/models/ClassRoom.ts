import mongoose, { Schema, Document, Types } from 'mongoose';
import { ITeacher } from './Teacher';
import { IStudent } from './Student';

export interface IClassRoom extends Document {
    name: string;
    teacher: ITeacher['_id'];
    students?: IStudent['_id'][];
};

const ClassRoomSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    teacher: {
        type: Types.ObjectId,
        ref: 'Teacher',
        required: true,
        unique: true
    },
    students: {
        type: [Types.ObjectId],
        ref: 'Student'
    }
});

export default mongoose.model<IClassRoom>('ClassRoom', ClassRoomSchema);