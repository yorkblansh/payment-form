import { Application, Response as IResponse } from 'express'
import { WEBrouter } from '../routes/RestApi'
import express from 'express'
import path from 'path'

export const WebRoute = (_express: Application) => {
   _express.use('/', WEBrouter, express.static(path.join(__dirname, 'build')))
   _express.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'build', 'index.html')))
}

export const sendStatic = (res: IResponse) => res.sendFile(__dirname + '/build/index.html')
