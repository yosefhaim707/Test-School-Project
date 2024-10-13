import mongoose, { Schema, Document, Types } from 'mongoose';
import { IClassRoom } from './ClassRoom';
import Grade, { IGrade } from './Grade';

export interface IStudent extends Document {
    name: string;
    email: string;
    password: string;
    classRoom: IClassRoom['_id'];
    grades: IGrade[];
};

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
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
        type: Types.ObjectId,
        ref: 'ClassRoom',
        required: true
    },
    grades: {
        type: [Grade]
    }
});

export default mongoose.model<IStudent>('Student', StudentSchema);