import express, { RequestHandler } from "express"
import Controller from "../interfaces/controller"

export default class PostController implements Controller {
    public path = "/post"
    public router = express.Router()
    // private dto = SMSDTO
    // public PostService

    constructor() {
      this.initializeRoutes()
    //   this.smsService = new SMSService()
    }}

    private initializeRoutes() {
        this.router.post(`${this.path}/send`, validation(this.dto, true), this.sendSMS)
        this.router.post(`${this.path}/check`, validation(this.dto, true), this.checkSMS)
      }