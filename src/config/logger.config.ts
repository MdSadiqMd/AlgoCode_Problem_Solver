import winston from 'winston';
import 'winston-mongodb';
const { combine, timestamp, printf, colorize } = winston.format;
const { LOG_DB_URL } = require('./server.config');

const allowedTransports: winston.transport[] = [];
allowedTransports.push(new winston.transports.Console({
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(log => `${log.timestamp} [${log.level}]: ${log.message}`)
  )
}));

// MongoDB transport for error logs
allowedTransports.push(new winston.transports.MongoDB({
  level: 'error',
  db: LOG_DB_URL,
  collection: 'logs',
}));

// File transport for logging to app.log
/* allowedTransports.push(new winston.transports.File({
  filename: 'app.log',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(log => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  )
})); */

const logger: winston.Logger = winston.createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    printf(log => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
  ),
  transports: allowedTransports
});

export default logger;
