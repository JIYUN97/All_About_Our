import express, { RequestHandler } from "express";
import Controller from "./controller";
import {
  ConstellationTypeScore,
  bloodTypeScore,
  mbtiTypeScore,
  zodiacSignTypeScore,
} from "../lib/scoreCalculation";

export default class FateJudgmentController implements Controller {
  public path = "/judgment";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, this.judgeFate);
  }

  //운명 판단 요청
  private judgeFate: RequestHandler = async (req, res, next) => {
    const { me, you } = req.body;
    try {
      const [constellationScore, zodiacSignScore, bloodScore, mbtiScore] =
        await Promise.all([
          ConstellationTypeScore(me, you),
          zodiacSignTypeScore(me, you),
          bloodTypeScore(me, you),
          mbtiTypeScore(me, you),
        ]);
      if (constellationScore && zodiacSignScore && bloodScore && mbtiScore) {
        const result = [
          constellationScore,
          zodiacSignScore,
          bloodScore,
          mbtiScore,
        ];

        let score =
          (constellationScore + zodiacSignScore + bloodScore + mbtiScore) / 4;

        return res.send({ result: score });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
