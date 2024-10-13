import mongoose, { Schema, Document, Types, mongo } from 'mongoose';
import { IClassRoom } from './ClassRoom';

// Interface of teacher for TypeScript
export interface ITeacher extends Document {
    name: string;
    email: string;
    password: string;
    classRoom?: IClassRoom['_id'];
};

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classRoom: {
        type: Schema.Types.ObjectId,
        ref: 'ClassRoom'
    }
});

export default mongoose.model<ITeacher>('Teacher', TeacherSchema);