import { IMware } from '../../typings/mware.interfaces';
import shelljs from 'shelljs';

export const GV_mware: IMware = ({ req, res, logger }) => {
   const soft_ver = shelljs.exec('git describe').toString();
   const _soft_ver = soft_ver.substring(0, soft_ver.length - 12);

   if (req.cookies.admin_key) {
      res.send({
         version: soft_ver,
      });
   }
};
