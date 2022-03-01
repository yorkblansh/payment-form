export enum FORM_INPUTS {
	'name',
	'link1',
	'link2',
	'info',
}

export enum COOKIE_ENUM {
	'admin_key',
	'user_key',
	'user_name',
}

export enum MAIN_PATHES {
	'/adminka',
	'/auth',
	'/',
	'/favorites',
	'/register',
	'/stats',
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
	'/add_2_favorite',
	'/remove_from_favorite',
	'/favorites_api',
	'/get_favorites_names',
	'/get_stats',
}

export enum PERF_TYPE {
	'MODIFY',
	'REMOVE',
	'CREATE',

	'ADD_2_FAVORITE',
	'REMOVE_FROM_FAVORITE',
}

export type Iuser_types = 'admin' | 'default';

export const COOKIES = (cookie: keyof typeof COOKIE_ENUM) => cookie;
export const REST_API = (path: keyof typeof API) => path;
export const PATH = (path: keyof typeof MAIN_PATHES) => path;
