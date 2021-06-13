import { Document } from "mongoose";

interface MbtiType extends Document {
  mbti1: string;
  gender1: string;
  mbti2: string;
  gender2: string;
  score: number;
}

export default MbtiType;
