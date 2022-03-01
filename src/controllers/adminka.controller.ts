import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { Adminka_mware } from '../middlewares/api/adminka.mware';

export class Adminka_Controller {
   public static show(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Adminka_mware({ req, res, logger });
   }
}
