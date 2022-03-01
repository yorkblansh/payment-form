import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { LogOut_mware } from '../middlewares/api/logout.mware';

export class LogOut_Controller {
   public static perform(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      LogOut_mware.perform({ req, res, logger });
   }
}
