import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IGrade extends Document {
    _id: Types.ObjectId;
    date: Date;
    score: number;
};

const GradeSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    score: {
        type: Number,
        required: true,
        min: [0, 'Minimum grade 0'],
        max: [100, 'Maximum grade 100']
    }
});

export default mongoose.model<IGrade>('Grade', GradeSchema);