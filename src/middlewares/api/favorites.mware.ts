import { IMware } from '../typings/mware.interfaces';
import { JsonDB_Services } from '../services/jsondb.services';

export class Favorites_mware {
   public static getFavorites: IMware = ({ req, res, logger }) => {
      const { user_name } = req.body;
      logger.log('returned FAVORITES');
      JsonDB_Services.getFavorites({
         user_name,
         cb: (favorites) => {
            res.send({ organizes: favorites });
         },
      });
   };

   public static get_favorite_org_names: IMware = ({ req, res, logger }) => {
      const { user_name } = req.body;
      const { obj_keys } = JsonDB_Services.getFavorites_ONLY_NAME_STRINGS(user_name);
      res.send({ org_names: obj_keys });
   };
}
