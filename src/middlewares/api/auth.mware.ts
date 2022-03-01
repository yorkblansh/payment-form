import md5 from 'md5';
import { COOKIES, PATH } from '../../../react_frontend/src/api/consts';
import { sendStatic } from '../send_static_file.mw';
import { JsonDB_Services } from '../services/jsondb.services';
import { IMware } from '../typings/mware.interfaces';

export class Auth_mware {
   public static show: IMware = ({ res, logger }) => {
      logger.log('AUTH page returned');
      return sendStatic(res);
   };
   public static perform: IMware = ({ req, res }) => {
      console.dir(req.body);
      const _login = req.body['login-input_/auth'];
      const _password = req.body['password-input_/auth'];
      // console.log(`login: ${login}, password: ${password}`);

      // console.dir(JsonDB_Services.get_user(_login));
      JsonDB_Services.get_user(_login, ({ is_user_exist, login, password, user_type }) => {
         if (is_user_exist) {
            if (user_type === 'admin') {
               if (_login === login && _password === password) {
                  res.cookie(
                     COOKIES('admin_key'),
                     { a_k: '789456123' },
                     {
                        expires: new Date(Date.now() + 172800000),
                     },
                  );
                  console.dir('go to ADMINKA');
                  res.redirect('/adminka');
               } else {
                  res.redirect(PATH('/auth'));
               }
            } else if (user_type === 'default') {
               if (_login === login && _password === password) {
                  res.cookie(COOKIES('user_key'), md5(new Date(Date.now() + 172800000).toString()), {
                     expires: new Date(Date.now() + 172800000),
                  });
                  res.cookie(COOKIES('user_name'), login, {
                     expires: new Date(Date.now() + 172800000),
                  });
                  res.redirect(PATH('/'));
               } else {
                  res.redirect(PATH('/auth'));
               }
            } else {
               res.redirect(PATH('/auth'));
            }
         } else {
            console.log('not found user, return user to home page ');

            res.redirect(PATH('/auth'));
         }
      });
      res.redirect(PATH('/auth'));
   };
}
