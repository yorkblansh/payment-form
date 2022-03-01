import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { Home_page_mware } from '../middlewares/api/home_page.mware';

interface Ireq_res {
   (req: IRequest, res: IResponse): void;
}
export class PaymentForm_Controller {
   public static show: Ireq_res = (req, res) => Home_page_mware.show({ req, res });
   public static perform: Ireq_res = (req, res) => Home_page_mware.perform({ req, res });
}
