const { error, success } = require("../utils");

const logger = require("../logger")("command:start");

module.exports = function start(config) {
  try {
    logger.highlight("Starting the app on port:", config.port);

    // Simulate starting the app
    setTimeout(() => {
      logger.success("App started successfully on port " + config.port);
    }, 1000);
  } catch (err) {
    logger.error(err.message);
  }
};
