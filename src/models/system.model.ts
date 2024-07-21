import mongoose, { Schema, Document, Types } from "mongoose"

export interface ISystem extends Document {
    planets: Types.ObjectId[]
    starName: string
}

const systemSchema = new Schema<ISystem>({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: { type: String, required: true }
})

const System = mongoose.model<ISystem>('System', systemSchema)

export {System}