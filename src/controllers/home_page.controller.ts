import { Response as IResponse } from 'express'
import { db } from '../app/services/node-json.db.service'
import { IPaymentData } from '../interfaces'
import { sendStaticOn } from '../server/Routes'

type Ireq_res = { (req: { body: IPaymentData }, res: IResponse): void }

export class PaymentForm_Controller {
   public static show: Ireq_res = (req, res) => sendStaticOn(res)
   public static send_pay_post: Ireq_res = ({ body: _payment_data }, res) => {
      const payment_data: IPaymentData = { ..._payment_data, date: new Date() }
      const response = { your_payment_data: payment_data }
      db.pushData(payment_data)
      res.send(response)
      res.redirect('/')
   }
}
