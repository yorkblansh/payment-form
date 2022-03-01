import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { Auth_mware } from '../middlewares/api/auth.mware';

export class Auth_Controller {
   public static show(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Auth_mware.show({ req, res, logger });
   }

   public static perform(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Auth_mware.perform({ req, res, logger });
   }
}
