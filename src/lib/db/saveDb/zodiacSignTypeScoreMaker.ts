import { ZodiacSignModel, ZodiacSignType } from "../../../model/ZodiacSignType";
import txt from "../sourceDb/ZodiacSignTypeSource";

export default async function zodiacSignScoreData() {
  await ZodiacSignModel.deleteMany({});
  txt
    .toString()
    .split("\n")
    .forEach(async (element: String) => {
      let [zodiacSign1, gender1, zodiacSign2, gender2, score_str, reference, notes] =
        element.split("#");
      let score = parseInt(score_str);
      await ZodiacSignModel.create({
        zodiacSign1,
        gender1,
        zodiacSign2,
        gender2,
        score,
        reference,
        notes,
      });
      console.log("ZodiacSign data generated!");
    });
}
