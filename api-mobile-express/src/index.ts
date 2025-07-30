import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import { connect } from 'mongoose';
import EnvVars from '@src/constants/EnvVars';
import server from './server';

// **** Run **** //

const SERVER_START_MSG =
  'Le serveur Express a démarré à l\'URL: http://127.0.0.1:' + EnvVars.Port.toString() +
  '/api/telephones-intelligents/all';

connect(process.env.MONGODB_URI!)
  .then(() => server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG)))
  .catch((err) => logger.err(err, true));