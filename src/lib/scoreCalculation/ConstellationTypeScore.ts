import { userInfo } from "../config";
import {
  ConstellationModel,
  ConstellationType,
} from "../../model/ConstellationType/index";
import mongoose from "mongoose";
import "dotenv/config";

export default async (
  me: userInfo,
  you: userInfo
): Promise<ConstellationType | undefined> => {
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
    // 19930830
    let me_born_month = parseInt(String(me.born).slice(4, 6));
    let me_born_day = parseInt(String(me.born).slice(6, 8));
    let you_born_month = parseInt(String(you.born).slice(4, 6));
    let you_born_day = parseInt(String(you.born).slice(6, 8));

    // 별자리 구하는 함수
    function getConstellation(month: number, day: number) {
      let cons;
      if (month == 1) {
        if (day >= 20) {
          cons = "Aquarius";
        } else cons = "Capricornus";
      }

      if (month == 2) {
        if (day >= 19) {
          cons = "Pisces";
        } else cons = "Aquarius";
      }

      if (month == 3) {
        if (day >= 21) {
          cons = "Aries";
        } else cons = "Pisces";
      }

      if (month == 4) {
        if (day >= 20) {
          cons = "Taurus";
        } else cons = "Aries";
      }

      if (month == 5) {
        if (day >= 21) {
          cons = "Gemini";
        } else cons = "Taurus";
      }

      if (month == 6) {
        if (day >= 22) {
          cons = "Cancer";
        } else cons = "Gemini";
      }

      if (month == 7) {
        if (day >= 23) {
          cons = "Leo";
        } else cons = "Cancer";
      }

      if (month == 8) {
        if (day >= 23) {
          cons = "Virgo";
        } else cons = "Leo";
      }

      if (month == 9) {
        if (day >= 24) {
          cons = "Libra";
        } else cons = "Virgo";
      }

      if (month == 10) {
        if (day >= 23) {
          cons = "Scorpius";
        } else cons = "Libra";
      }

      if (month == 11) {
        if (day >= 23) {
          cons = "Sagittarius";
        } else cons = "Scorpius";
      }

      if (month == 12) {
        if (day >= 25) {
          cons = "Capricornus";
        } else cons = "Sagittarius";
      }
      return cons;
    }

    let constellation1 = getConstellation(me_born_month, me_born_day);
    let constellation2 = getConstellation(you_born_month, you_born_day);

    let result = await ConstellationModel.findOne({
      constellation1,
      gender1: me.gender,
      constellation2,
      gender2: you.gender,
    });

    if (!result) {
      result = await ConstellationModel.findOne({
        constellation1: constellation2,
        gender1: you.gender,
        constellation2: constellation1,
        gender2: me.gender,
      });
    }
    // if (!result) throw new Error("해당하는 결과값이 존재하지 않습니다.");
    return result!;
  } catch (err) {
    console.log(err);
  }
};
