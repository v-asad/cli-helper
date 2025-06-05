const betterAjvErrors = require("better-ajv-errors").default;
const schema = require("./schema.json");
const Ajv = require("ajv").default;

const logger = require("../logger")("config:ajv");

const ajv = new Ajv({
  strict: false,
});

module.exports = function validateConfig(config) {
  const isValid = ajv.validate(schema, config);

  if (!isValid) {
    logger.error("[Invalid Configuration]");
    logger.log("\n", betterAjvErrors(schema, config, ajv.errors), "\n");

    return false;
  }

  return true;
};
