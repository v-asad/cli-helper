const { error, ajvError } = require("../utils");
const schema = require("./schema.json");

const Ajv = require("ajv").default;

const ajv = new Ajv({
  strict: false,
});

module.exports = function validateConfig(config) {
  const isValid = ajv.validate(schema, config);

  if (!isValid) {
    error(
      "[Invalid Configuration]: " +
        ajv.errorsText(ajv.errors, { separator: "\n" })
    );
    ajvError(config, ajv.errors);

    return false;
  }

  return true;
};
