import { Document } from "mongoose";

interface CountType extends Document {
    count : number;
}

export default CountType;
