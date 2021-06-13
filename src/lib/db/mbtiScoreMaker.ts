import { MbtiModel, MbtiType } from "../../model/MbtiType";
// import MbtiModel from "../../model/MbtiType/model";
// import App from "../../app";
// const txt = import * as from "./mbtiSource"
import txt from "./mbtiSource";

export default async function mbtiScoreData() {
  txt
    .toString()
    .split("\n")
    .forEach(async (element: String) => {
      let [mbti1, gender1, mbti2, gender2, score_str] = element.split("#");
      let score = parseInt(score_str);
      console.log("mbti data inserting to database...");
      await MbtiModel.create({ mbti1, gender1, mbti2, gender2, score });
      console.log("mbti data generated!");
    });
}
