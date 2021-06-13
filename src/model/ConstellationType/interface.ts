import { Document } from "mongoose";

interface ConstellationType extends Document {
  constellation1: string;
  gender1: string;
  constellation2: string;
  gender2: string;
  score: number;
  reference: string;
  notes: string;
}

export default ConstellationType;
