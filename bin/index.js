#!/usr/bin/env node
const arg = require("arg");

const { usage } = require("../src/utils");

const getConfig = require("../src/config/config-mgr");
const start = require("../src/commands/start");

const logger = require("../src/logger")("bin");

try {
  const args = arg({
    "--start": Boolean,
  });

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (err) {
  logger.error("[Error]: " + err.message);
  usage();
}
