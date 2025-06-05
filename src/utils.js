const chalk = require("chalk").default;

const log = (...args) => console.log(chalk.whiteBright(...args));
const error = (...args) => console.error(chalk.redBright(...args));
const info = (...args) => console.info(chalk.blueBright(...args));
const success = (...args) => console.log(chalk.greenBright(...args));

const usage = () => {
  log("\nUsage:");
  log("  --start   Start the application");
  log("  --build   Build the application");
  log("\nExample:");
  log("  tool --start");
  log("  tool --build");
  log("");
};

module.exports = {
  log,
  error,
  info,
  success,
  usage,
};
