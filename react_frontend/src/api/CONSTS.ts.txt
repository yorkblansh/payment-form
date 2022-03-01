export enum FORM_INPUTS {
   'name',
   'link1',
   'link2',
   'info',
}

export enum MAIN_PATHES {
   '/adminka',
   '/auth',
   '/',

   '/register',
}

export enum API {
   '/reg_user_api',
   '/logout',
   '/home',
   '/auth_post',
   '/modify_data_api',
   '/remove_data_api',
   '/create_data_api',
   '/get_version',
}

export enum PERF_TYPE {
   'MODIFY',
   'REMOVE',
   'CREATE',
}

export const REST_API = (path: keyof typeof API) => path;
export const PATH = (path: keyof typeof MAIN_PATHES) => path;
