const { log, error, success } = require("../utils");

module.exports = function start(config) {
  try {
    log("Starting the app on port:", config.port);

    // Simulate starting the app
    setTimeout(() => {
      success("App started successfully on port " + config.port);
    }, 1000);
  } catch (err) {
    error("[Error]: " + err.message);
  }
};
