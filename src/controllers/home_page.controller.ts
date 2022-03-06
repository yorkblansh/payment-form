import { Response as IResponse } from 'express'
import { db } from '../app/services/lowdb.service'
import { PaymentData } from '../interfaces'
import { sendStaticOn } from '../server/Routes'

type Ireq_res = { (req: { body: PaymentData }, res: IResponse): void }

export class PaymentForm_Controller {
   public static show: Ireq_res = (req, res) => sendStaticOn(res)
   public static send_pay_post: Ireq_res = (req, res) => {
      const payment_data = req.body
      db.data.payment_requests.push(payment_data)
      res.redirect('/')
   }
}
