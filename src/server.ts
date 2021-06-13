import "dotenv/config";
import App from "./app";
import * as http from "http";
// import mbtiScoreData from "./lib/db/mbtiScoreData";

const port = process.env.PORT || 5000;

const app = new App().app;
const server = http.createServer(app);

server.listen(port, function () {
  console.log("Server Start~♥");
  // mbtiScoreData();
});
