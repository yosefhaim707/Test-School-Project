import mongoose, { Schema, Document, Types } from 'mongoose';
import { IClassRoom } from './ClassRoom';
import { IGrade } from './Grade';

export interface IStudent extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
    class: IClassRoom['_id'];
    grades: IGrade[];
};