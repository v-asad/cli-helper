const { log, error } = require("../utils");

const schema = require("./schema.json");

const { cosmiconfigSync } = require("cosmiconfig");
const Ajv = require("ajv").default;

const configLoader = cosmiconfigSync("tool");

const ajv = new Ajv();

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd());

  if (result) {
    return result.config;
  } else {
    error("No tool configuration found in package.json");
    return { port: 1234 };
  }
};
