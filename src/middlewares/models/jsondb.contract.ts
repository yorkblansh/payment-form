import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export const JsonDB_Contract = () => {
   const jsondb = new JsonDB(new Config('DataBase', true, false, '/'));
   return { jsondb };
};
