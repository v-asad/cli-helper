const { error, ajvError } = require("../utils");
const defaultConfig = require("./default.json");
const validateConfig = require("./ajv");

const { cosmiconfigSync } = require("cosmiconfig");

const configLoader = cosmiconfigSync("tool");

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());

  if (!result) {
    error("No configuration found for tool");
    return defaultConfig;
  }

  if (!validateConfig(result.config)) process.exit(1);

  return result.config;
};
