import { Document } from "mongoose";

interface BloodType extends Document {
  blood1: string;
  gender1: string;
  blood2: string;
  gender2: string;
  score: number;
  reference: string;
  notes: string;
}

export default BloodType;
