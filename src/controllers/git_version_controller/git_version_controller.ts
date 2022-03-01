import { ILogger } from '../../LOGS/Logger';
import { GV_mware } from '../../middlewares/api/git_version_mware/gv.mware';
import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';

export class Git_Version_Controller {
   public static show = (req: IRequest, res: IResponse) => {
      const logger: ILogger = req.app.locals.logger;
      GV_mware({ logger, req, res });
   };
}
