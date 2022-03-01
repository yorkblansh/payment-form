import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../LOGS/Logger';

export interface IMware {
   (obj: { req: IRequest; res: IResponse; logger: ILogger }): void;
}
