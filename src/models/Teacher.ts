import mongoose, { Schema, Document, Types, mongo } from 'mongoose';

// Interface of teacher for TypeScript
export interface ITeacher extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    classRoom: Types.ObjectId;
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
        type: Types.ObjectId,
        required: true
    }
});

export default mongoose.model<ITeacher>('Teacher', TeacherSchema);