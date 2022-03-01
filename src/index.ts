import { Express } from './server/Express';

const LoadServer = () => new Express().init();
LoadServer();
