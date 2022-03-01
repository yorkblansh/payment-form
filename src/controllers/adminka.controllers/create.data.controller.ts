import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../LOGS/Logger';
import { AdminkaPerformData } from '../../middlewares/api/adminka/adminka.data.perform.mware';

export class CreateData_Controller {
   public static perform = (req: IRequest, res: IResponse) => {
      const logger: ILogger = req.app.locals.logger;
      AdminkaPerformData.AdminkaCreateData_mware({ req, res, logger });
   };
}
