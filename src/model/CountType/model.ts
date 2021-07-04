import CountType from "./interface";
import { Schema, model, Model, Types } from "mongoose";

const CountTypeSchema = new Schema({
  count: { type: Number, required: true },
});

const CountModel: Model<CountType> = model("countType", CountTypeSchema);
export default CountModel;
