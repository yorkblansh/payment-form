import { sendStatic } from '../send_static_file.mw';
import { IMware } from '../typings/mware.interfaces';

export const Adminka_mware: IMware = ({ req, res, logger }) => {
   if (req.cookies.admin_key.a_k === '789456123') {
      sendStatic(res);
      // logger.log(req.cookies);
      // console.dir(req.cookies);
   } else {
      logger.log('нет куков');
      res.redirect('/auth');
   }
   // if (req.cookies.admin_key.a_k === '789456123') {
   //    logger.log('COOkies => YES');
   //    sendStatic(res);
   // } else {
   //    logger.log('returnig to auth...');
   //    res.redirect('/auth');
   // }
};
