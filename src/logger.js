const chalk = require("chalk").default;
const debug = require("debug").default;

module.exports = function createLogger(name) {
  return {
    log: (...args) => console.log(chalk.whiteBright(...args)),
    error: (...args) => console.error(chalk.redBright(...args)),
    info: (...args) => console.info(chalk.blueBright(...args)),
    success: (...args) => console.log(chalk.greenBright(...args)),
    warning: (...args) => console.log(chalk.yellow(...args)),
    highlight: (...args) => console.log(chalk.bgCyanBright(...args)),
    debug: debug(name),
  };
};
