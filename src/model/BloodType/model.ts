import BloodType from "./interface";
import { Schema, model, Model, Types } from "mongoose";

const BloodTypeSchema = new Schema({
  blood1: { type: String, required: true },
  gender1: { type: String, required: true },
  blood2: { type: String, required: true },
  gender2: { type: String, required: true },
  score: { type: Number, required: true },
  reference: { type: String, required: true },
  notes: { type: String, required: true },
});

const BloodModel: Model<BloodType> = model("bloodType", BloodTypeSchema);
export default BloodModel;
