const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const configFile = path.resolve(process.cwd(), "tinify.config.js");
    await promisify(fs.access)(configFile, fs.constants.F_OK | fs.constants.W_OK);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    };
    throw error;
  }
};