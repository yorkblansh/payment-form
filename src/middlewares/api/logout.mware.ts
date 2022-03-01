import { COOKIES } from '../../../react_frontend/src/api/consts';
import { IMware } from '../typings/mware.interfaces';

export class LogOut_mware {
   public static perform: IMware = ({ logger, res }) => {
      logger.log('logged OUT');
      try {
         res.clearCookie(COOKIES('admin_key'));
         res.clearCookie(COOKIES('user_key'));
         res.clearCookie(COOKIES('user_name'));
      } catch (error) {
         logger.log(error);
      }
      res.redirect('/');
   };
}
