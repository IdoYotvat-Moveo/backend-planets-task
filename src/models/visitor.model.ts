import mongoose, { Schema, Document, Types } from "mongoose"

export interface IVisitor extends Document {
    name: string
    homePlanet: Types.ObjectId
    visitedPlanets: Types.ObjectId[]
}

const visitorSchema = new Schema<IVisitor>({
    name: { type: String, required: true },
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet', required: true },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const Visitor = mongoose.model<IVisitor>('Visitor', visitorSchema)

export { Visitor }