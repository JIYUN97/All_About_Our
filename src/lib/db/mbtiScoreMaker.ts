import { MbtiModel, MbtiType } from "../../model/MbtiType";
// import MbtiModel from "../../model/MbtiType/model";
// import App from "../../app";
// const txt = import * as from "./mbtiSource"
import txt from "./mbtiSource";

export default async function mbtiScoreData() {
  // db지우고 ㄴ돌리 // 레퍼런스 오브젝트 형태로 변환
  await MbtiModel.remove({});
  txt
    .toString()
    .split("\n")
    .forEach(async (element: String) => {
      let [mbti1, gender1, mbti2, gender2, score_str, reference, notes] =
        element.split("#");
      let score = parseInt(score_str);
      console.log("mbti data inserting to database...");
      await MbtiModel.create({
        mbti1,
        gender1,
        mbti2,
        gender2,
        score,
        reference,
        notes,
      });
      console.log("mbti data generated!");
    });
}
