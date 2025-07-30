/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

export default {
  NodeEnv: process.env.NODE_ENV ?? '',
  MongoDb_URI: process.env.MONGODB_URI ?? '',
  Port: process.env.PORT ?? 0,
} as const;
