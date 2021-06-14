import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import Controller from "./routers/controller";
import "dotenv/config";

class App {
  app: express.Application;
  constructor(controller: Controller) {
    this.app = express();
    this.setDB();
    this.setMiddleWare();
    this.setRouter(controller);
    this.set404Error();
    this.setError();
  }
  private setDB() {
    const databaseName = process.env.NODE_ENV;
    mongoose
      .connect(`mongodb://${process.env.SERVER}:27017/${databaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        ignoreUndefined: true,
        useFindAndModify: false,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
      })
      .then(() => console.log("db connected"))
      .catch((err) => console.log(err));
  }
  private setMiddleWare() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }
  private setRouter(controller: Controller) {
    this.app.get("/", (req, res) => {
      res.send("hello");
    });
    this.app.use("/", controller.router);
  }
  private set404Error() {
    this.app.use((req: Request, res: Response, _) => {
      res.status(404).send("404");
    });
  }
  private setError() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(err);
        res.status(500).send({ err: err.message });
      }
    );
  }
}

export default App;
