import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../LOGS/Logger';
import { AdminkaPerformData } from '../../middlewares/api/adminka/adminka.data.perform.mware';

export class ModifyData_Controller {
   public static perform = (req: IRequest, res: IResponse) => {
      const logger: ILogger = req.app.locals.logger;
      AdminkaPerformData.AdminkaModifyData_mware({ req, res, logger });
   };
}
