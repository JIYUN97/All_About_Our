import ZodiacSignType from "./interface";
import { Schema, model, Model, Types } from "mongoose";

const ZodiacSignTypeSchema = new Schema({
  zodiacSign1: { type: String, required: true },
  gender1: { type: String, required: true },
  zodiacSign2: { type: String, required: true },
  gender2: { type: String, required: true },
  score: { type: Number, required: true },
  reference: { type: String, required: true },
  notes: { type: String, required: true },
});

const ZodiacSignModel: Model<ZodiacSignType> = model("zodiacSignType", ZodiacSignTypeSchema);
export default ZodiacSignModel;
