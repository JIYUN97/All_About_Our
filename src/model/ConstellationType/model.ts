import ConstellationType from "./interface";
import { Schema, model, Model, Types } from "mongoose";

const ConstellationTypeSchema = new Schema({
  constellation1: { type: String, required: true },
  gender1: { type: String, required: true },
  constellation2: { type: String, required: true },
  gender2: { type: String, required: true },
  score: { type: Number, required: true },
  reference: { type: String, required: true },
  notes: { type: String, required: true },
});

const ConstellationModel: Model<ConstellationType> = model("constellationType", ConstellationTypeSchema);
export default ConstellationModel;
