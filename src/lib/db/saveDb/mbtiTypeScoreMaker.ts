import { MbtiModel, MbtiType } from "../../../model/MbtiType";
import txt from "../sourceDb/mbtiTypeSource";

export default async function mbtiScoreData() {
  try {
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
  } catch (err) {
    console.log(err);
  }
}
