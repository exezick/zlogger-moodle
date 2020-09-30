var appRoot = require('app-root-path');
var winston = require('winston');
var winston_mysql = require('winston-mysql');

let mydate = new Date();
let newFilename = mydate.getFullYear() + "" + mydate.getMonth() + "" + mydate.getDate() + "-" + "hublogger.log";

var options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/${newFilename}`,
    handleExceptions: true,
    format: winston.format.simple(),
    colorize: false,
  },
  logtodb: {
    level: 'info',
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hub',
    table    : 'mdl_logstore_zlogger_log',
    format: winston.format.simple(),
    handleExceptions: true
  },

};

var logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston_mysql(options.logtodb)
  ],
  exitOnError: false,
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message.substring(0,message.lastIndexOf('\n')));
  },
};

module.exports = logger;