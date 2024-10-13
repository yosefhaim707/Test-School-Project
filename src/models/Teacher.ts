import mongoose, { Schema, Document, Types } from 'mongoose';

// Interface of teacher for TypeScript
export interface ITeacher extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    class: Types.ObjectId;
};

