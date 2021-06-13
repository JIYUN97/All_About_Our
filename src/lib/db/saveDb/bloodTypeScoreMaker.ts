import { BloodModel, BloodType } from "../../../model/BloodType";
import txt from "../sourceDb/bloodTypeSource";

export default async function bloodScoreData() {
  await BloodModel.deleteMany({});
  txt
    .toString()
    .split("\n")
    .forEach(async (element: String) => {
      let [blood1, gender1, blood2, gender2, reference, notes, score_str] =
        element.split("#");
      let score = parseInt(score_str);
      await BloodModel.create({
        blood1,
        gender1,
        blood2,
        gender2,
        score,
        reference,
        notes,
      });
    });
    console.log("blood data generated!");
}
