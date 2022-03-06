import { Response as IResponse } from 'express'
import { db } from '../app/services/node-json.db.service'
import { IPaymentData } from '../interfaces'
import { sendStaticOn } from '../server/Routes'
import md5 from 'md5'

type Ireq_res = { (req: { body: IPaymentData }, res: IResponse): void }

export class PaymentForm_Controller {
   public static show: Ireq_res = (req, res) => sendStaticOn(res)
   public static send_pay_post: Ireq_res = ({ body: _payment_data }, res) => {
      const { id, amount, card, cvv, date, expdate }: IPaymentData = {
         ..._payment_data,
         date: new Date(),
         id: md5(new Date().toString()),
      }
      const response = { your_payment_data: { id, amount } }
      db.pushData({ id, amount, card, cvv, date, expdate })
      res.send(response)
   }
}
