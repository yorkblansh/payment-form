import { JsonDB_Services } from '../services/jsondb.services';
import { IMware } from '../typings/mware.interfaces';

export class Stats_mware {
   public static get_stats: IMware = ({ res }) => {
      const { end_pairs } = JsonDB_Services.getOrganizes_favorite_counts();
      res.send({ end_pairs });
   };
}
