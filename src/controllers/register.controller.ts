import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { Register_mware } from '../middlewares/api/register.mware';
export class Register_Controller {
   public static show(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Register_mware.show({ req, res, logger });
   }
   public static perform(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Register_mware.perform({ req, res, logger });
   }
}
