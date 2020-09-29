var moodle_client = require("moodle-client");
var winston = require("winston");

var logger = winston.createLogger({
    level: "error",
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
});

moodle_client.init({
    logger: logger,
    wwwroot: "http://localhost/work/rehub/moodle/",
    token: "d457b5e5b0cc31c05ccf38628e4dfc14"

}).then(function(client) {
    return do_something(client);

}).catch(function(err) {
    console.log("Unable to initialize the client: " + err);
});

function do_something(client) { 
    return client.call({
        wsfunction: "core_webservice_get_site_info",

    }).then(function(info) {
        console.log("Hello %s, welcome to %s", info.fullname, info.sitename);
        return;
    });
}