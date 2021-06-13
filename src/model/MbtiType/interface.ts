import { Document } from "mongoose";

interface MbtiType extends Document {
  mbti1: string;
  gender1: string;
  mbti2: string;
  gender2: string;
  score: number;
  reference: string;
  notes: string;
}

export default MbtiType;
