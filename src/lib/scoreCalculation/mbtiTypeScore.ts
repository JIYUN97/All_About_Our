import { userInfo } from "../config";
import { MbtiModel, MbtiType } from "../../model/MbtiType/index";
import mongoose from "mongoose";
import "dotenv/config";

export default async (
  me: userInfo,
  you: userInfo
): Promise<MbtiType | undefined | any> => {
  try {
    const databaseName = process.env.NODE_ENV;
    mongoose.connect(`mongodb://${process.env.SERVER}:27017/${databaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      ignoreUndefined: true,
      useFindAndModify: false,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
    });

    let check = 0;
    let result : any = await MbtiModel.findOne({
      mbti1: me.mbti,
      gender1: me.gender,
      mbti2: you.mbti,
      gender2: you.gender,
    });

    if (!result) {
      result = await MbtiModel.findOne({
        mbti1: you.mbti,
        gender1: you.gender,
        mbti2: me.mbti,
        gender2: me.gender,
      });
      check = 1;
    }
    return [result, check];
  } catch (err) {
    console.log(err);
  }
};
