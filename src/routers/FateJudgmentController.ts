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
});

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

  //운명 판단 요청 api
  private judgeFate: RequestHandler = async (req, res, next) => {
    const { me, you } = req.body;

    try {
      const [constellation, zodiacSign, blood, mbti] = await Promise.all([
        ConstellationTypeScore(me, you),
        zodiacSignTypeScore(me, you),
        bloodTypeScore(me, you),
        mbtiTypeScore(me, you),
      ]);

      // 점수 계산
      if (constellation && zodiacSign && blood && mbti) {
        let score: number =
          (constellation.score * 2 +
            zodiacSign.score +
            blood[0].score +
            mbti[0].score * 4) /
          8;

        // 이미지
        let constellationImg = "";
        if (1 <= constellation.score && constellation.score <= 29) {
          constellationImg =
            "https://1.bp.blogspot.com/-7xWnGafgYzY/YOP6tKDUcuI/AAAAAAAAAWE/Mj2W4fgGj_wzSQr5Q5a40FGomN-aFC2lwCLcBGAsYHQ/s320/20.png";
        }
        if (30 <= constellation.score && constellation.score <= 39) {
          constellationImg =
            "https://1.bp.blogspot.com/-mxqP3WHEqBw/YOP6sAhnz2I/AAAAAAAAAWA/c5HYEibI-ocxB3EdsnlCL5n5iiQE-1dtACLcBGAsYHQ/s320/30.png";
        }
        if (40 <= constellation.score && constellation.score <= 49) {
          constellationImg =
            "https://1.bp.blogspot.com/-HvZN1Uvd5yE/YOP6yAxtu9I/AAAAAAAAAWM/a5V6QcWIU5ULRNVRAUkGQ31c5K0O4joEACLcBGAsYHQ/s320/40.png";
        }
        if (50 <= constellation.score && constellation.score <= 59) {
          constellationImg =
            "https://1.bp.blogspot.com/-3CGUXJ3M3SQ/YOP6zZlLRyI/AAAAAAAAAWQ/Pw63AaXkb4UkeiXeEIKGfZnjjyU1lVkkwCLcBGAsYHQ/s320/50.png";
        }
        if (60 <= constellation.score && constellation.score <= 69) {
          constellationImg =
            "https://1.bp.blogspot.com/-PDyUKCHNXaU/YOP60_StbfI/AAAAAAAAAWU/VoZouXCfds46jZHAdXmIpwQk4sYGSR-MQCLcBGAsYHQ/s320/60.png";
        }
        if (70 <= constellation.score && constellation.score <= 79) {
          constellationImg =
            "https://1.bp.blogspot.com/-V5XtjI-lbUA/YOP64LT7oFI/AAAAAAAAAWY/1kXBF1B-MEM6-5BASYl1L7VpMDpQWAp2gCLcBGAsYHQ/s320/70.png";
        }
        if (80 <= constellation.score && constellation.score <= 89) {
          constellationImg =
            "https://1.bp.blogspot.com/-___9AYGMXtk/YOP65Q2ayFI/AAAAAAAAAWc/be0k6YiqS3I-lr9U53nvILfHoytg0eEeQCLcBGAsYHQ/s320/80.png";
        }
        if (90 <= constellation.score && constellation.score <= 100) {
          constellationImg =
            "https://1.bp.blogspot.com/-Yx_-EB1m5mU/YOP67E9qNaI/AAAAAAAAAWg/SsclgyrBFgMowH6wDxoKGw9KeNo8EaPFgCLcBGAsYHQ/s320/90.png";
        }

        let mbtiImg = "";
        if (1 <= mbti[0].score && mbti[0].score <= 29) {
          mbtiImg =
            "https://1.bp.blogspot.com/-7xWnGafgYzY/YOP6tKDUcuI/AAAAAAAAAWE/Mj2W4fgGj_wzSQr5Q5a40FGomN-aFC2lwCLcBGAsYHQ/s320/20.png";
        }
        if (30 <= mbti[0].score && mbti[0].score <= 39) {
          mbtiImg =
            "https://1.bp.blogspot.com/-mxqP3WHEqBw/YOP6sAhnz2I/AAAAAAAAAWA/c5HYEibI-ocxB3EdsnlCL5n5iiQE-1dtACLcBGAsYHQ/s320/30.png";
        }
        if (40 <= mbti[0].score && mbti[0].score <= 49) {
          mbtiImg =
            "https://1.bp.blogspot.com/-HvZN1Uvd5yE/YOP6yAxtu9I/AAAAAAAAAWM/a5V6QcWIU5ULRNVRAUkGQ31c5K0O4joEACLcBGAsYHQ/s320/40.png";
        }
        if (50 <= mbti[0].score && mbti[0].score <= 59) {
          mbtiImg =
            "https://1.bp.blogspot.com/-3CGUXJ3M3SQ/YOP6zZlLRyI/AAAAAAAAAWQ/Pw63AaXkb4UkeiXeEIKGfZnjjyU1lVkkwCLcBGAsYHQ/s320/50.png";
        }
        if (60 <= mbti[0].score && mbti[0].score <= 69) {
          mbtiImg =
            "https://1.bp.blogspot.com/-PDyUKCHNXaU/YOP60_StbfI/AAAAAAAAAWU/VoZouXCfds46jZHAdXmIpwQk4sYGSR-MQCLcBGAsYHQ/s320/60.png";
        }
        if (70 <= mbti[0].score && mbti[0].score <= 79) {
          mbtiImg =
            "https://1.bp.blogspot.com/-V5XtjI-lbUA/YOP64LT7oFI/AAAAAAAAAWY/1kXBF1B-MEM6-5BASYl1L7VpMDpQWAp2gCLcBGAsYHQ/s320/70.png";
        }
        if (80 <= mbti[0].score && mbti[0].score <= 89) {
          mbtiImg =
            "https://1.bp.blogspot.com/-___9AYGMXtk/YOP65Q2ayFI/AAAAAAAAAWc/be0k6YiqS3I-lr9U53nvILfHoytg0eEeQCLcBGAsYHQ/s320/80.png";
        }
        if (90 <= mbti[0].score && mbti[0].score <= 100) {
          mbtiImg =
            "https://1.bp.blogspot.com/-Yx_-EB1m5mU/YOP67E9qNaI/AAAAAAAAAWg/SsclgyrBFgMowH6wDxoKGw9KeNo8EaPFgCLcBGAsYHQ/s320/90.png";
        }

        let bloodImg = "";
        if (1 <= blood[0].score && blood[0].score <= 29) {
          bloodImg =
            "https://1.bp.blogspot.com/-7xWnGafgYzY/YOP6tKDUcuI/AAAAAAAAAWE/Mj2W4fgGj_wzSQr5Q5a40FGomN-aFC2lwCLcBGAsYHQ/s320/20.png";
        }
        if (30 <= blood[0].score && blood[0].score <= 39) {
          bloodImg =
            "https://1.bp.blogspot.com/-mxqP3WHEqBw/YOP6sAhnz2I/AAAAAAAAAWA/c5HYEibI-ocxB3EdsnlCL5n5iiQE-1dtACLcBGAsYHQ/s320/30.png";
        }
        if (40 <= blood[0].score && blood[0].score <= 49) {
          bloodImg =
            "https://1.bp.blogspot.com/-HvZN1Uvd5yE/YOP6yAxtu9I/AAAAAAAAAWM/a5V6QcWIU5ULRNVRAUkGQ31c5K0O4joEACLcBGAsYHQ/s320/40.png";
        }
        if (50 <= blood[0].score && blood[0].score <= 59) {
          bloodImg =
            "https://1.bp.blogspot.com/-3CGUXJ3M3SQ/YOP6zZlLRyI/AAAAAAAAAWQ/Pw63AaXkb4UkeiXeEIKGfZnjjyU1lVkkwCLcBGAsYHQ/s320/50.png";
        }
        if (60 <= blood[0].score && blood[0].score <= 69) {
          bloodImg =
            "https://1.bp.blogspot.com/-PDyUKCHNXaU/YOP60_StbfI/AAAAAAAAAWU/VoZouXCfds46jZHAdXmIpwQk4sYGSR-MQCLcBGAsYHQ/s320/60.png";
        }
        if (70 <= blood[0].score && blood[0].score <= 79) {
          bloodImg =
            "https://1.bp.blogspot.com/-V5XtjI-lbUA/YOP64LT7oFI/AAAAAAAAAWY/1kXBF1B-MEM6-5BASYl1L7VpMDpQWAp2gCLcBGAsYHQ/s320/70.png";
        }
        if (80 <= blood[0].score && blood[0].score <= 89) {
          bloodImg =
            "https://1.bp.blogspot.com/-___9AYGMXtk/YOP65Q2ayFI/AAAAAAAAAWc/be0k6YiqS3I-lr9U53nvILfHoytg0eEeQCLcBGAsYHQ/s320/80.png";
        }
        if (90 <= blood[0].score && blood[0].score <= 100) {
          bloodImg =
            "https://1.bp.blogspot.com/-Yx_-EB1m5mU/YOP67E9qNaI/AAAAAAAAAWg/SsclgyrBFgMowH6wDxoKGw9KeNo8EaPFgCLcBGAsYHQ/s320/90.png";
        }

        let zodiacSignImg = "";
        if (1 <= zodiacSign.score && zodiacSign.score <= 29) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-7xWnGafgYzY/YOP6tKDUcuI/AAAAAAAAAWE/Mj2W4fgGj_wzSQr5Q5a40FGomN-aFC2lwCLcBGAsYHQ/s320/20.png";
        }
        if (30 <= zodiacSign.score && zodiacSign.score <= 39) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-mxqP3WHEqBw/YOP6sAhnz2I/AAAAAAAAAWA/c5HYEibI-ocxB3EdsnlCL5n5iiQE-1dtACLcBGAsYHQ/s320/30.png";
        }
        if (40 <= zodiacSign.score && zodiacSign.score <= 49) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-HvZN1Uvd5yE/YOP6yAxtu9I/AAAAAAAAAWM/a5V6QcWIU5ULRNVRAUkGQ31c5K0O4joEACLcBGAsYHQ/s320/40.png";
        }
        if (50 <= zodiacSign.score && zodiacSign.score <= 59) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-3CGUXJ3M3SQ/YOP6zZlLRyI/AAAAAAAAAWQ/Pw63AaXkb4UkeiXeEIKGfZnjjyU1lVkkwCLcBGAsYHQ/s320/50.png";
        }
        if (60 <= zodiacSign.score && zodiacSign.score <= 69) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-PDyUKCHNXaU/YOP60_StbfI/AAAAAAAAAWU/VoZouXCfds46jZHAdXmIpwQk4sYGSR-MQCLcBGAsYHQ/s320/60.png";
        }
        if (70 <= zodiacSign.score && zodiacSign.score <= 79) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-V5XtjI-lbUA/YOP64LT7oFI/AAAAAAAAAWY/1kXBF1B-MEM6-5BASYl1L7VpMDpQWAp2gCLcBGAsYHQ/s320/70.png";
        }
        if (80 <= zodiacSign.score && zodiacSign.score <= 89) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-___9AYGMXtk/YOP65Q2ayFI/AAAAAAAAAWc/be0k6YiqS3I-lr9U53nvILfHoytg0eEeQCLcBGAsYHQ/s320/80.png";
        }
        if (90 <= zodiacSign.score && zodiacSign.score <= 100) {
          zodiacSignImg =
            "https://1.bp.blogspot.com/-Yx_-EB1m5mU/YOP67E9qNaI/AAAAAAAAAWg/SsclgyrBFgMowH6wDxoKGw9KeNo8EaPFgCLcBGAsYHQ/s320/90.png";
        }

        // 내용
        let content = {
          mbti: mbti[0].notes,
          blood: blood[0].notes,
          constellation: constellation.notes,
          zodiacSign: zodiacSign.notes,
        };

        // 이름
        let name = {
          meName: me.name,
          youName: you.name,
        };

        // result가 중복이라 반대를 검색했을 경우, 이름도 반대로 내려줘야 함 me, you를 넣은게, mbti, blood타입밖에 없으니 두 타입만 적용
        if (mbti[1] == 1) {
          name = {
            meName: you.name,
            youName: me.name,
          };
        }

        if (blood[1] == 1) {
          name = {
            meName: you.name,
            youName: me.name,
          };
        }

        // 개별 점수
        let individuallyScore = {
          mbtiScore: mbti[0].score,
          bloodScore: blood[0].score,
          constellationScore: constellation.score,
          zodiacSignScore: zodiacSign.score,
        };

        // 몇명 참여 카운팅
        let count: any = await CountModel.find({});
        if (count[0].count == undefined) {
          await CountModel.create({ count: 1 });
        } else {
          let newCount = count[0].count + 1;
          await CountModel.updateOne({}, { $set: { count: newCount } });
        }

        return res.send({
          result: {
            name,
            score: score,
            individuallyScore,
            img: {
              mbtiImg,
              bloodImg,
              constellationImg,
              zodiacSignImg,
            },
            content,
          },
        });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  private count: RequestHandler = async (req, res, next) => {
    try {
      let count = await CountModel.find({});
      return res.send({ result: { count: count[0].count } });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
