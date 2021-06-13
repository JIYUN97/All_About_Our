import { ConstellationModel, ConstellationType } from "../../../model/ConstellationType";
import txt from "../sourceDb/constellationTypeSource";

export default async function constellationScoreData() {
  await ConstellationModel.deleteMany({});
  txt
    .toString()
    .split("\n")
    .forEach(async (element: String) => {
      let [constellation1, gender1, constellation2, gender2, score_str, reference, notes] =
        element.split("#");
      let score = parseInt(score_str);
      await ConstellationModel.create({
        constellation1,
        gender1,
        constellation2,
        gender2,
        score,
        reference,
        notes,
      });
      console.log("Constellation data generated!");
    });
}
