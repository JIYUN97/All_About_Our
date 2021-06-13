import { Document } from "mongoose";

interface ZodiacSignType extends Document {
  zodiacSign1: string;
  gender1: string;
  zodiacSign2: string;
  gender2: string;
  score: number;
  reference: string;
  notes: string;
}

export default ZodiacSignType;
