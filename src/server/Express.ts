import express from 'express'
import http from 'http'
import { WebRoute } from './Routes'

export class Express {
   public _express: express.Application
   public http_server: http.Server

   public constructor() {
      this._express = express()
      this.http_server = http.createServer(this._express) //? HTTP сервер для клиентов
      this.mountWeb()
   }

   private mountWeb = () => {
      this._express.use(express.json())
      this._express.use(express.urlencoded({ extended: true }))
      WebRoute(this._express)
   }

   public init = () => this.http_server.listen(5005, () => console.log('Server started on port 5005'))
}
