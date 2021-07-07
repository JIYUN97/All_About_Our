import { userInfo } from "../config";
import { BloodModel, BloodType } from "../../model/BloodType/index";
import mongoose from "mongoose";
import "dotenv/config";

export default async (
  me: userInfo,
  you: userInfo
): Promise<BloodType | undefined | any> => {
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
    let result = await BloodModel.findOne({
      blood1: me.blood,
      gender1: me.gender,
      blood2: you.blood,
      gender2: you.gender,
    });

    if (!result) {
      result = await BloodModel.findOne({
        blood1: you.blood,
        gender1: you.gender,
        blood2: me.blood,
        gender2: me.gender,
      });
      check = 1;
    }
    return[result, check];
  } catch (err) {
    console.log(err);
  }
};
