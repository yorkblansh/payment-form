import { Response as IResponse } from 'express';

export const sendStatic = (res: IResponse) => {
   return res.sendFile(__dirname + '/build/index.html');
};
