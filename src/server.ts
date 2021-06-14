import "dotenv/config";
import App from "./app";
import * as http from "http";
import mbtiScoreData from "./lib/db/saveDb/mbtiTypeScoreMaker";
import constellationScoreData from "./lib/db/saveDb/constellationTypeScoreMaker";
import zodiacSignScoreData from "./lib/db/saveDb/zodiacSignTypeScoreMaker";
import bloodScoreData from "./lib/db/saveDb/bloodTypeScoreMaker";
import FateJudgmentController from "./routers/FateJudgmentController";

const port = process.env.PORT || 5000;

const app = new App(new FateJudgmentController()).app;
const server = http.createServer(app);

server.listen(port, function () {
  console.log("Server Start~♥");
  // mbtiScoreData();
  // constellationScoreData();
  // zodiacSignScoreData();
  // bloodScoreData();
});
