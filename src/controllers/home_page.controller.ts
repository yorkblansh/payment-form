import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { sendStatic as sendStaticOn } from '../server/Routes'

type Ireq_res = { (req: IRequest, res: IResponse): void }

export class PaymentForm_Controller {
   public static show: Ireq_res = (req, res) => sendStaticOn(res)
   public static send_pay_post: Ireq_res = (req, res) => {
      console.table(req.body)
      res.redirect('/')
   }
}
