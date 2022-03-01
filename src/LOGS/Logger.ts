export interface ILogger {
   log: (a: string) => void;
}

export class Logger implements ILogger {
   public log = (a: string) => {
      console.dir(a);
   };
}
