import { userInfo } from "../config";
import {
  ZodiacSignModel,
  ZodiacSignType,
} from "../../model/ZodiacSignType/index";
import mongoose from "mongoose";
import "dotenv/config";
import App from "../../app";
import * as http from "http";

export default async (
  me: userInfo,
  you: userInfo
): Promise<number | undefined> => {
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

    const zodiac_arr = [
      "monkey",
      "rooster",
      "dog",
      "pig",
      "mouse",
      "ox",
      "tiger",
      "rabbit",
      "dragon",
      "snake",
      "horse",
      "lamb",
    ];
    // 하이루 하이루^^ 19930830
    const me_born_year = parseInt(String(me.born).slice(0, 5));
    const you_born_year = parseInt(String(you.born).slice(0, 5));
    const zodiacSign1 = zodiac_arr[me_born_year % 12];
    const zodiacSign2 = zodiac_arr[you_born_year % 12];

    let result = await ZodiacSignModel.findOne({
      zodiacSign1,
      gender1: me.gender,
      zodiacSign2,
      gender2: you.gender,
    });

    if (!result) {
      result = await ZodiacSignModel.findOne({
        zodiacSign1: zodiacSign2,
        gender1: you.gender,
        zodiacSign2: zodiacSign1,
        gender2: me.gender,
      });
    }
    console.log(result);
    // if (!result) throw new Error("해당하는 결과값이 존재하지 않습니다.");
    return result!.score;
  } catch (err) {
    console.log(err);
  }
};
