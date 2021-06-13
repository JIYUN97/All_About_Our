import { MbtiModel, MbtiType } from "../../../model/MbtiType";
import txt from "../sourceDb/mbtiTypeSource";

export default async function mbtiScoreData() {
  // db지우고 ㄴ돌리 // 레퍼런스 오브젝트 형태로 변환
  await MbtiModel.deleteMany({});
  txt
    .toString()
    .split("\n")
    .forEach(async (element: String) => {
      let [mbti1, gender1, mbti2, gender2, reference, notes, score_str] =
        element.split("#");
      let score = parseInt(score_str);
      await MbtiModel.create({
        mbti1,
        gender1,
        mbti2,
        gender2,
        score,
        reference,
        notes,
      });
    });
    console.log("mbti data generated!");
}
