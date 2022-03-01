import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { Stats_mware } from '../middlewares/api/stats.mware';

export class Stats_Controller {
   public static get_stats(req: IRequest, res: IResponse) {
      const logger: ILogger = req.app.locals.logger;
      Stats_mware.get_stats({ req, res, logger });
   }
}
