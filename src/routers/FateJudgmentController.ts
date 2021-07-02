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
      const [constellation, zodiacSign, blood, mbti] = await Promise.all([
        ConstellationTypeScore(me, you),
        zodiacSignTypeScore(me, you),
        bloodTypeScore(me, you),
        mbtiTypeScore(me, you),
      ]);
      if (constellation && zodiacSign && blood && mbti) {
        let score =
          (constellation.score +
            zodiacSign.score +
            blood.score +
            mbti.score * 2) /
          5;
        let content = {
          constellation: constellation.notes,
          blood: blood.notes,
          zodiacSign: zodiacSign.notes,
          mbti: mbti.notes,
        };
        return res.send({ result: { score: score, content } });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
