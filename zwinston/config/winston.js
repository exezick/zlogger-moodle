var appRoot = require('app-root-path');
var winston = require('winston');

let mydate = new Date();
let newFilename = mydate.getFullYear() + "" + mydate.getMonth() + "" + mydate.getDate() + "-" + "hublogger.log";

var options = {
  file: {
    level: 'verbose',
    filename: `${appRoot}/logs/${newFilename}`,
    handleExceptions: true,
    format: winston.format.simple(),
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

var logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file)
  ],
  exitOnError: false, 
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message.substring(0,message.lastIndexOf('\n')));
  },
};

module.exports = logger;