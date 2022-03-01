import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { Favorites_mware } from '../middlewares/api/favorites.mware';

export class Favorites_Controller {
   public static perform(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Favorites_mware.getFavorites({ req, res, logger });
   }

   public static get_favorite_org_names = (req: IRequest, res: IResponse) => {
      const logger: ILogger = req.app.locals.logger;
      Favorites_mware.get_favorite_org_names({ res, req, logger });
   };
}
