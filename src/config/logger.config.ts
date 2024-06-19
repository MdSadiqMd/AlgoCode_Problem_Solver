import winston from "winston";
import 'winston-mongodb';
// const { LOG_DB_URL } = require('./server.config');

const allowedTransports: winston.transport[] = [];
allowedTransports.push(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
  )
}));

/* // exporting logs to mongodb
allowedTransports.push(new winston.transports.MongoDB({
  level: 'error',
  db: LOG_DB_URL,
  collection: 'logs',
}));

// exporting logs to app.log file
allowedTransports.push(new winston.transports.File({
  filename: 'app.log'
})); */

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  ),
  transports: allowedTransports
});

export default logger;
