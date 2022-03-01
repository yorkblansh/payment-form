import { Iuser_types } from '../../../react_frontend/src/api/consts';
import { I_obj } from '../api/adminka/adminka.data.perform.mware';
import { JsonDB_Contract } from '../models/jsondb.contract';
import { Ijson_data_HOME_PAGE } from '../typings/json.data.home_page.interface';
import async from 'async';

interface IaddORremove_favorite {
   (props: { user_name: string; org_name: string; perf_type: 'BY_USER' | 'BY_SYSTEM' }): void;
}

export class JsonDB_Services {
   public static home_page_dataPerform = () => {
      const { jsondb } = JsonDB_Contract();
      const json_data: Ijson_data_HOME_PAGE = jsondb.getData(`/organizes`);
      const json_data_HOME_PAGE = json_data;
      // console.dir('MUST GET ORGSSSS');
      // console.dir(json_data);
      return { json_data_HOME_PAGE };
   };

   public static getOrganizes_favorite_counts = () => {
      const { jsondb } = JsonDB_Contract();
      const organizes = jsondb.getData(`/organizes`);
      const org_names = Object.keys(organizes);
      // eslint-disable-next-line prefer-const
      let favorite_count: number[] = [];

      favorite_count = org_names.map((org_name): number => {
         return jsondb.getData(`/organizes/${org_name}/favorite_counter`);
      });
      const end_pairs: (string | number)[][] = org_names.map((org_name, i) => {
         return [org_name, favorite_count[i]];
      });
      // console.dir(end_pairs);
      return { end_pairs };
   };

   public static getFavorites_ONLY_NAME_STRINGS = (user_name: string) => {
      const { jsondb } = JsonDB_Contract();
      const favorites = jsondb.getData(`/users/${user_name}/favorites`);
      const obj_keys = Object.keys(favorites);
      return { obj_keys, favorites };
   };

   public static getFavorites = ({ user_name, cb }: { user_name: string; cb }): any => {
      const { jsondb } = JsonDB_Contract();
      const { obj_keys, favorites } = this.getFavorites_ONLY_NAME_STRINGS(user_name);
      // eslint-disable-next-line prefer-const
      let end_obj = {};
      async.each(
         obj_keys,
         (key, _cb) => {
            end_obj[favorites[key]] = jsondb.getData(`/organizes/${favorites[key]}`);
            _cb();
         },
         (err) => {
            // if (err) console.dir(err);
            // console.dir(end_obj);
            cb(end_obj);
         },
      );

      // return { favorites: end_favorites };
      // for (const key in favorites) {
      //    end_obj[favorites[key]] = jsondb.getData(`/organizes/${favorites[key]}`);
      //    // console.dir(favorites[key]);
      //    // console.dir(jsondb.getData(`/organizes/${favorites[key]}`));
      // }
   };

   public static get_favorite_count_byOrgName = (org_name: string) => {
      const { jsondb } = JsonDB_Contract();
      const favorite_count: number = jsondb.getData(`/organizes/${org_name}/favorite_counter`);
      return { favorite_count };
   };

   public static incrORdecr_favorite_counter = (org_name: string, perf_type: 'INCREMENT' | 'DECREMENT') => {
      const { jsondb } = JsonDB_Contract();
      const _push = (favorite_counter: number) =>
         jsondb.push(`/organizes/${org_name}/favorite_counter`, favorite_counter, true);
      const { favorite_count } = this.get_favorite_count_byOrgName(org_name);
      perf_type === 'INCREMENT' && _push(favorite_count + 1);
      perf_type === 'DECREMENT' && _push(favorite_count - 1);
   };

   public static add2favorite: IaddORremove_favorite = ({ user_name, org_name, perf_type }) => {
      const { jsondb } = JsonDB_Contract();
      if (perf_type === 'BY_USER') this.incrORdecr_favorite_counter(org_name, 'INCREMENT');
      jsondb.push(`/users/${user_name}/favorites/${org_name}`, org_name, true);
   };

   public static remove_from_favorite: IaddORremove_favorite = ({ user_name, org_name, perf_type }) => {
      const { jsondb } = JsonDB_Contract();
      if (perf_type === 'BY_USER') this.incrORdecr_favorite_counter(org_name, 'DECREMENT');
      jsondb.delete(`/users/${user_name}/favorites/${org_name}`);
   };

   public static adminka_create_data = (obj: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/organizes/${obj.name}`, obj, true);
      jsondb.push(`/organizes/${obj.name}/favorite_counter`, 0, true);
   };

   public static adminka_remove_data = ({ name }: { name: string }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/organizes/${name}`);
   };

   public static get_users_ONLY_NAME_STRINGS = () => {
      const { jsondb } = JsonDB_Contract();
      const users_names = Object.keys(jsondb.getData('/users'));
      return { users_names };
   };

   public static adminka_modify_data = (obj: I_obj) => {
      const { jsondb } = JsonDB_Contract();

      console.table(obj);
      // if (obj.old_name) {
      const { users_names } = this.get_users_ONLY_NAME_STRINGS();
      const { favorite_count } = this.get_favorite_count_byOrgName(obj.old_name);

      if (favorite_count !== 0) {
         users_names.forEach((user_name) => {
            if (user_name !== 'admin') {
               this.remove_from_favorite({ user_name, org_name: obj.old_name, perf_type: 'BY_SYSTEM' });
               this.add2favorite({ user_name, org_name: obj.name, perf_type: 'BY_SYSTEM' });
            }
         });
      }
      jsondb.delete(`/organizes/${obj.old_name}`);
      obj['favorite_counter'] = favorite_count;
      try {
         console.dir('TRYING TO PUSH');
         jsondb.push(`/organizes/${obj.name}`, obj, true);
      } catch (error) {
         console.dir('ERRRRROOOORRR');
         // console.error(error);
      }
      jsondb.push(`/organizes/${obj.name}/favorite_counter`, favorite_count, true);
      // }
   };

   public static reg_new_user = ({ login, password }: { login: string; password: string }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/users/${login}`, { login, password, user_type: 'default' });
   };

   public static get_user = (
      user_login: string,
      cb: (props: { is_user_exist: boolean; login: string; password: string; user_type: Iuser_types }) => void,
   ) => {
      const { jsondb } = JsonDB_Contract();
      let json_data: { login: string; password: string; user_type: Iuser_types };
      try {
         json_data = jsondb.getData(`/users/${user_login}`);
         const { login, password, user_type } = json_data;
         let is_user_exist = false;
         let _login = 'NONE';
         if (json_data.login != undefined) {
            is_user_exist = true;
            _login = login;
         } else {
            is_user_exist = false;
            _login = 'NONE';
         }
         cb({ is_user_exist, login: _login, password, user_type });
      } catch (error) {
         // console.dir(error);
      }

      // return { login: json_data.login, password: json_data.password };
   };
}
