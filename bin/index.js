#!/usr/bin/env node
const arg = require("arg");

const { usage, error } = require("../src/utils");

const getConfig = require("../src/config/config-mgr");
const start = require("../src/commands/start");

try {
  const args = arg({
    "--start": Boolean,
  });

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (err) {
  error("[Error]: " + err.message);
  usage();
}
