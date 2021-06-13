import MbtiType from "./interface";
import { Schema, model, Model, Types } from "mongoose";

const MbtiTypeSchema = new Schema({
  mbti1: { type: String, required: true },
  gender1: { type: String, required: true },
  mbti2: { type: String, required: true },
  gender2: { type: String, required: true },
  score: { type: Number, required: true },
});

const MbtiModel: Model<MbtiType> = model("mbtiType", MbtiTypeSchema);
export default MbtiModel;
