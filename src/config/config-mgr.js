const defaultConfig = require("./default.json");
const validateConfig = require("./ajv");

const logger = require("../logger")("config:mgr");

const { cosmiconfigSync } = require("cosmiconfig");

const configLoader = cosmiconfigSync("tool");

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning(
      "No configuration found for tool. Using default configuration."
    );
    return defaultConfig;
  }

  if (!validateConfig(result.config)) process.exit(1);

  return result.config;
};
