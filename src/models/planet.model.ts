import mongoose, { Schema, Document, Types } from "mongoose"

export interface IPlanet extends Document {
    name: string
    system: Types.ObjectId
    visitors: Types.ObjectId[]
}

const planetSchema = new Schema<IPlanet>({
    name: { type: String, required: true },
    system: { type: Schema.Types.ObjectId, ref: 'System', required: true },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const Planet = mongoose.model<IPlanet>('Planet', planetSchema)

export { Planet }

