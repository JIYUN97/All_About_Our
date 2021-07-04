import express, { RequestHandler } from "express";
import Controller from "./controller";
import { CountModel } from "../model/CountType/index";
import {
  ConstellationTypeScore,
  bloodTypeScore,
  mbtiTypeScore,
  zodiacSignTypeScore,
} from "../lib/scoreCalculation";
import { findAncestor, findConfigFile } from "typescript";
import mongoose from "mongoose";
import "dotenv/config";


const databaseName = process.env.NODE_ENV;
mongoose.connect(`mongodb://${process.env.SERVER}:27017/${databaseName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  ignoreUndefined: true,
  useFindAndModify: false,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
})

export default class FateJudgmentController implements Controller {

  public path = "/judgment";
  public path2 = "/count";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, this.judgeFate);
    this.router.get(this.path2, this.count);
  }

  //운명 판단 요청
  private judgeFate: RequestHandler = async (req, res, next) => {
    const { me, you } = req.body;
    console.log(req.body);
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
        let name = {
          meName: me.name,
          youName: you.name,
        };

        let individuallyScore = {
          mbtiScore : mbti.score,
          constellationScore : constellation.score,
          bloodScore : blood.score,
          zodiacSignScore : zodiacSign.score
        };
        
        let count : any = await CountModel.find({})
        console.log(count)
        console.log(count[0].count)
        
        if (count[0].count == undefined) {
          await CountModel.create({count : 1})
        } else {
          let newCount = count[0].count+1
          await CountModel.updateOne({}, { $set: { count : newCount } })
        }

        return res.send({ result: { name, score: score, individuallyScore, content } });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  private count: RequestHandler = async (req, res, next) => {
    try { 
      let count = await CountModel.find({})
      return res.send({result: {count : count[0].count}})
    }
    catch (err) {
      console.log(err);
      next(err);
     }
 
  }
}