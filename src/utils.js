const chalk = require("chalk").default;
const betterAjvErrors = require("better-ajv-errors").default;

const schema = require("./config/schema.json");

const log = (...args) => console.log(chalk.whiteBright(...args));
const error = (...args) => console.error(chalk.redBright(...args));
const info = (...args) => console.info(chalk.blueBright(...args));
const success = (...args) => console.log(chalk.greenBright(...args));

const ajvError = (config, errors) =>
  log("\n", betterAjvErrors(schema, config, errors), "\n");

const usage = () => {
  log("\nUsage:");
  log("  --start   Start the application");
  log("\nExample:");
  log("  tool --start");
  log("");
};

module.exports = {
  log,
  error,
  info,
  success,
  usage,
  ajvError,
};
